import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';

import { LibreriaRoutingModule } from './libreria-routing.module';
import { LibriDashboardComponent } from './libri-dashboard/libri-dashboard.component';
import { LibriAddComponent } from './libri-add/libri-add.component';
import { LibriService } from './services/libri.service';
import { LibriNavComponent } from './libri-nav/libri-nav.component';
import { LibreriaComponent } from './libreria.component';
import { Error404Component } from './Error/error404/error404.component';


@NgModule({
  declarations: [
    LibriDashboardComponent,
    LibriAddComponent,
    LibriNavComponent,
    LibreriaComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    LibreriaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ], 
  providers: [LibriService]
})
export class LibreriaModule { }
