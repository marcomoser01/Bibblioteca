import { NavbarService } from 'src/app/services/navbar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {
  constructor(datiService: NavbarService) {
    datiService.appComponentReload = true;
  }
}
