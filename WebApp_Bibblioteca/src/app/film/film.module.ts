import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';

import { FilmRoutingModule } from './film-routing.module';
import { FilmDashboardComponent } from './film-dashboard/film-dashboard.component';
import { FilmAddComponent } from './film-add/film-add.component';
import { FilmService } from './services/film.service';
import { FilmNavComponent } from './film-nav/film-nav.component';
import { FilmComponent } from './film.component';
import { Error404Component } from './Error/error404/error404.component';


@NgModule({
  declarations: [
    FilmDashboardComponent,
    FilmAddComponent,
    FilmNavComponent,
    FilmComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    FilmRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ], 
  providers: [FilmService]
})
export class FilmModule { }
