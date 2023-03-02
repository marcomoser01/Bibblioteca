import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '../Error/error404/error404.component';
import { LibreriaComponent } from './libreria.component';
import { LibriAddComponent } from './libri-add/libri-add.component';
import { LibriDashboardComponent } from './libri-dashboard/libri-dashboard.component';

const routes: Routes = [
  {
    path: '', component: LibreriaComponent, children: [
      {
        path: 'dashboard', component: LibriDashboardComponent
      },
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'home', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'add', component: LibriAddComponent  
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
export class LibreriaRoutingModule { }
