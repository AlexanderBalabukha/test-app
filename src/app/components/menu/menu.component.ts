import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private  router: Router) { }

  ngOnInit() {
  }
  clock() {
  this.router.navigate(['clock']);
  }
  crud() {
    this.router.navigate(['crud']);
  }
  iss() {
    this.router.navigate(['iss']);
  }
  astronauts() {
    this.router.navigate(['astronauts']);
  }
}
