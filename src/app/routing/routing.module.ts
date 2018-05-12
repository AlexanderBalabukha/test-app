import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClockComponent} from '../components/clock/clock.component';
import { CrudComponent} from '../components/crud/crud.component';
import { IssComponent} from '../components/iss/iss.component';
import {AstronautsComponent} from '../components/astronauts/astronauts.component';

const appRoutes: Routes = [
  { path: 'clock', component: ClockComponent},
  { path: 'crud', component: CrudComponent},
  { path: 'iss', component: IssComponent},
  {path: 'astronauts', component: AstronautsComponent}
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
