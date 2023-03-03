import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginModuleService {

  url : string =  "http://localhost:8099/api/login"
}
