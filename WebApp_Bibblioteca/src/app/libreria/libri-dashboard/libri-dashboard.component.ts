import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LibriService } from '../services/libri.service';
import { Libro } from '../domains/libro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libri-dashboard',
  templateUrl: './libri-dashboard.component.html',
  styleUrls: ['./libri-dashboard.component.css']
})

export class LibriDashboardComponent {

  displayedColumns: string[] = ['id', 'titolo', 'autore', 'prezzo', 'bottoni'];

  libri$: Observable<Libro[]> = new Observable<Libro[]>();
  libro?: Libro = new Libro();

  constructor(public datiService: LibriService, private router: Router) {
    this.libri$ = this.datiService.getAll()
  }

  canc(id: number) {

    this.datiService.canc(id).subscribe(res => {
      this.libri$ = this.datiService.getAll()
    });

  }

  update(libro: Libro) {
    this.datiService.setLibro(libro);
    this.router.navigate(['libreria/add']);
    
  }


  prenota(libro: Libro) {
    libro.prenotato = !libro.prenotato;
    if (libro.id != 0) {
      this.datiService.update(libro).subscribe();
    }
  }

}
