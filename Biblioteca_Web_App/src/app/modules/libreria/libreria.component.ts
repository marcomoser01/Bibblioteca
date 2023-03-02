import { NavbarService } from 'src/app/services/navbar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent {
  constructor(datiService: NavbarService) {
    datiService.appComponentReload = true;
  }
}
