import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { isUndefined } from 'util';
import { Observable } from 'rxjs/index';

@Injectable()
export class DatageterService {
  // url = 'http://api.fixer.io/latest?base=USD';
  urlUser = 'http://localhost:3000/api/';
  urlISS = 'http://api.open-notify.org/iss-pass.json';
  urlRise = 'https://api.sunrise-sunset.org/json';

  // ?lat=+e.lat+'&lng='+e.lon+'&formatted=0&callback=?'

  constructor(private http: HttpClient) {
  }

  getRise(data): Promise<any> {
    const options = {
      params: new HttpParams().set('lat', data.lat).set('lng', data.lon).set('formatted', '0')
    };
    return this.http.get(this.urlRise, options).toPromise();
  }

  getISS(data): Promise<any> {
    const options = {
      params: new HttpParams().set('lon', data.lon).set('lat', data.lat).set('n', '10')
    };
    return this.http.get(this.urlISS, options).toPromise();
  }

  getData(): Observable<any> {
    return this.http.get(this.urlUser);
  }

  getUsers(): Observable<any> {
    return this.http.get(this.urlUser + 'users');
  }

  saveUser(data): Promise<any> {
    if (isUndefined(data._id)) {
      return this.http.post(this.urlUser + 'users', JSON.stringify(data), {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
      }).toPromise();
    } else {
      return this.http.put(this.urlUser + 'users', JSON.stringify(data), {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
      }).toPromise();
    }
  }

  deleteUser(data): Promise<any> {
    return this.http.delete(this.urlUser + 'users/' + data._id).toPromise();
  }
}
