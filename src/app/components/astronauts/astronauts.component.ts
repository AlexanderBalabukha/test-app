import { Component, OnInit } from '@angular/core';
import { DatageterService } from '../../services/datageter.service';

@Component({
  selector: 'app-astronauts',
  templateUrl: './astronauts.component.html',
  styleUrls: ['./astronauts.component.css']
})
export class AstronautsComponent implements OnInit {
 data;

  constructor(private dataGet: DatageterService) {
  }

  ngOnInit() {
    this.dataGet.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    }, err => {
      this.data = err;
      console.log(this.data);
    });
  }

}
