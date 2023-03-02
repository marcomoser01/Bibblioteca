import { NavbarService } from 'src/app/services/navbar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(datiService: NavbarService) {
    if (datiService.appComponentReload) {
      window.location.reload();
    }
  }

}
