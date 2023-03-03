import { SingUpComponent } from './sing-up/sing-up.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard.component';
import { LoginComponent } from './login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', component: LoginComponent, children: [

    {
      path: 'dashboard', component: LoginDashboardComponent
    },
    {
      path: '', redirectTo: 'dashboard', pathMatch: 'full'
    },
    {
      path: 'singin', component: SingInComponent
    },
    {
      path: 'singup', component: SingUpComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
