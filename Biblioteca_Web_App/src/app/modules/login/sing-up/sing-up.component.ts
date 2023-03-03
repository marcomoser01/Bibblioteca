import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {

  @Input() email: string;
  @Input() password: string;

  setItem(email, password) {
    this.email = email;
    this.password = password;
  }
}
