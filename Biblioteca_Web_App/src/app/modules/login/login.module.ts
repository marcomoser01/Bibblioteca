import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material.module';

import { LoginRoutingModule } from './login-routing.module';
import { RegistratiComponent } from './registrati/registrati.component';
import { LoginComponent } from './login.component';
import { LoginDashboardComponent } from './login-dashboard/login-dashboard.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    RegistratiComponent,
    LoginComponent,
    LoginDashboardComponent,
    SingInComponent,
    SingUpComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule
  ]
})
export class LoginModule { }
