import { Component, OnInit } from '@angular/core';
import { DatageterService } from '../../services/datageter.service';

@Component({
  selector: 'app-iss',
  templateUrl: './iss.component.html',
  styleUrls: ['./iss.component.css']
})
export class IssComponent implements OnInit {
  places = [{city: 'Tel-Aviv', lat: 32.0853, lon: 34.7818},
    {city: 'London', lat: 51.5074, lon: -0.1278},
    {city: 'New York City', lat: 40.7128, lon: -74.0060}];
  place = '';
  issRise;
  headers = ['Rise', 'Duration', 'Day/Night'];
  objectKeys = Object.keys;
  date = Date();

  constructor(private dataGet: DatageterService) {
    this.places.forEach(function (e) {
      dataGet.getRise(e).then(res => {
        Object.assign(e, {'sunrise': new Date(res.results.sunrise)});
        Object.assign(e, {'sunset': new Date(res.results.sunset)});
        console.log(res);
      }, err => {
        console.log(err);
      });
    });
  }

  ngOnInit() {
  }

  getTime(time) {
    const date = new Date(time);
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
  }

  setPlace() {
    if (this.place !== '') {
      this.issRise = undefined;
      this.dataGet.getISS(this.places[this.place]).then(res => {
        this.issRise = res.response;
        console.log(res);
      }, err => {
        console.log(err);
      });
    }
  }
}
