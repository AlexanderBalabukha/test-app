import { Component, OnInit, ViewChild } from '@angular/core';
import { DatageterService } from '../../services/datageter.service';
import { MatSort, MatTable, MatTableDataSource } from '@angular/material';


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
  @ViewChild('myTable') myTable: MatTable<any>;

  ngOnInit() {
    this.dataGet.getAstronauts().subscribe(res => {
      this.data = res;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = this.astroPredicat;
      this.data[0].leader = 'leader';
      console.log(this.dataSource);
    }, err => {
      this.data = err;
      console.log(this.data);
    });
  }

  applyFilter() {
    this.dataSource.filter = this.filterVal;
  }

  astroPredicat = function (i, filter) {
    if (filter.name.toLowerCase() && !(i.name).toLowerCase().includes(filter.name.toLowerCase())) return false;
    if (filter.weight && !i.weight.includes(filter.weight)) return false;
    if (filter.age && !i.age.includes(filter.age)) return false;
    return true;
  };

  update() {
    if (this.dataSource.data.length > 1) {
      let del_index;
      for (let i = 0; i < this.dataSource.data.length; i++) {
        if (this.dataSource.data[i].leader === 'leader') {
          this.dataSource.data[i].leader = undefined;
          if (i + 1 < this.dataSource.data.length) {
            del_index = i + 1;
          } else {
            del_index = 0;
          }
          if (i + 2 < this.dataSource.data.length) {
            this.dataSource.data[i + 2].leader = 'leader';
          } else if (i + 1 < this.dataSource.data.length) {
            this.dataSource.data[0].leader = 'leader';
          } else {
            this.dataSource.data[1].leader = 'leader';
          }
          break;
        }
      }

      this.dataGet.delAstronauts(this.dataSource.data[del_index]);
      this.dataSource.data.splice(del_index, 1);
      // this.myTable.renderRows();
      this.dataSource.data = this.dataSource.data.slice();
    }
  }
}
