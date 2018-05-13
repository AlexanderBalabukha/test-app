import { Component, OnInit, ViewChild } from '@angular/core';
import { DatageterService } from '../../services/datageter.service';
import { MatSort, MatTableDataSource } from '@angular/material'


@Component({
  selector: 'app-astronauts',
  templateUrl: './astronauts.component.html',
  styleUrls: ['./astronauts.component.css']
})
export class AstronautsComponent implements OnInit {
  displayedColumns = ['name', 'weight', 'age', 'leader'];
  data;
  dataSource;
  filterVal = {name: '', weight: '', age: ''};

  constructor(private dataGet: DatageterService) {
  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataGet.getAstronauts().subscribe(res => {
      this.data = res;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = this.astroPredicat;
      this.data[0].leader = 'leader';
    }, err => {
      this.data = err;
      console.log(this.data);
    });
  }

  applyFilter() {
    this.dataSource.filter = this.filterVal;
  }

  astroPredicat = function (i, filter) {
    if (filter.name && !i.name.includes(filter.name)) return false;
    if (filter.weight && !i.weight.includes(filter.weight)) return false;
    if (filter.age && !i.age.includes(filter.age)) return false;
    return true;
  };

  update() {
    for (let i = this.data.length - 1; i >= 0; i--) {
      if (this.data[i].leader === 'leader') {
        this.data[i].leader = undefined;
        if (i !== this.data.length - 1) {
          this.data[i + 1].leader = 'leader';
          break;
        } else {
          this.data[0].leader = 'leader';
          break;
        }
      }
    }
  }
}
