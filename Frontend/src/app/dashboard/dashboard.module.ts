import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './pages/cars/cars.component';
import { HeadersComponent } from './components/headers/headers.component';
import { CarbyidComponent } from './pages/carbyid/carbyid.component';
import { AppRoutingModule } from '../app-routing.module';
import { FilterComponent } from './components/filter/filter.component';
//angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    CarsComponent,
    HeadersComponent,
    CarbyidComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
  ],
  exports:[
    CarsComponent,
    HeadersComponent,
    CarbyidComponent,
  
  ]
})
export class DashboardModule { }
