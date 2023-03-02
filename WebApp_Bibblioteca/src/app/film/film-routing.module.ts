import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '../Error/error404/error404.component';
import { FilmComponent } from './film.component';
import { FilmAddComponent } from './film-add/film-add.component';
import { FilmDashboardComponent } from './film-dashboard/film-dashboard.component';

const routes: Routes = [
  {
    path: '', component: FilmComponent, children: [
      {
        path: 'dashboard', component: FilmDashboardComponent
      },
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'home', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'add', component: FilmAddComponent  
      },
      {
        path: 'aggiungi', redirectTo: 'add', pathMatch: 'full'
      },
      {
        path: '**',
        component: Error404Component
      },
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRoutingModule { }
