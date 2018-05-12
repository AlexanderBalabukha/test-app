import { Component, OnInit } from '@angular/core';
import { DatageterService } from '../../services/datageter.service';
import { User } from '../../models/user';
import { isUndefined } from 'util';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  users;
  err;
  user: User;
  objectKeys = Object.keys;
  edit = [];

  constructor(private dataGet: DatageterService) {
  }


  ngOnInit() {
    this.user = new User('', '', '', '', '');
    this.dataGet.getUsers().subscribe(res => {
      this.users = res;
      this.edit.length = this.users.length;
      this.edit.fill(true, 0, this.users.length);
    }, err => {
      this.err = err;
      console.log(err);
    });
  }

  update(i) {
    this.edit[i] = false;
  }

  delete(i) {
    if (!isUndefined(this.users[i]._id)) {
      this.dataGet.deleteUser(this.users[i]);
    }
    this.users.splice(i, 1);
    this.edit.splice(i, 1);
  }

  save(i) {
    this.edit[i] = true;
    this.dataGet.saveUser(this.users[i]).then(data => {
    }, err => {
      console.log(err);
    });
  }

  create() {
    this.users.unshift(this.user);
    this.edit.unshift(false);
    this.user = new User('', '', '', '', '');
  }

}
