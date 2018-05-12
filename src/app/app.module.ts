import { RoutingModule} from './routing/routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock/clock.component';
import { DatageterService } from './services/datageter.service';
import { AstronautsComponent } from './components/astronauts/astronauts.component';
import { CrudComponent } from './components/crud/crud.component';
import { FilterCrudPipe } from './pipe/filter-crud.pipe';
import { IssComponent } from './components/iss/iss.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    AstronautsComponent,
    CrudComponent,
    FilterCrudPipe,
    IssComponent,
    MenuComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterializeModule
  ],
  providers: [DatageterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
