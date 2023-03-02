import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmService } from '../services/film.service';
import { Film } from '../domains/film';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-dashboard',
  templateUrl: './film-dashboard.component.html',
  styleUrls: ['./film-dashboard.component.css']
})

export class FilmDashboardComponent {

  displayedColumns: string[] = ['id', 'titolo', 'autore', 'prezzo', 'bottoni'];

  films$: Observable<Film[]> = new Observable<Film[]>();
  film?: Film = new Film();

  constructor(public datiService: FilmService, private router: Router) {
    this.films$ = this.datiService.getAll()
  }


  canc(id: number) {
    this.datiService.canc(id).subscribe(res => {

      this.films$ = this.datiService.getAll()

    });
  }

  update(film: Film) {
    this.datiService.setFilm(film);
    this.router.navigate(['film/add']);
  }

  prenota(film: Film) {
    film.prenotato = !film.prenotato;
    if (film.id != 0) {
      this.datiService.update(film).subscribe();
    }
  }

}
