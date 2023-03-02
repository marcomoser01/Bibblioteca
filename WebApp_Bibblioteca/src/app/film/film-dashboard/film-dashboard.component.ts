import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmService } from '../services/film.service';
import { Film } from '../domains/film';

@Component({
  selector: 'app-film-dashboard',
  templateUrl: './film-dashboard.component.html',
  styleUrls: ['./film-dashboard.component.css']
})

export class FilmDashboardComponent {

  displayedColumns: string[] = ['id', 'titolo', 'autore', 'prezzo', 'bottoni'];

  films$: Observable<Film[]> = new Observable<Film[]>();
  isAdd: boolean = false;
  film?: Film = new Film();

  constructor(public datiService: FilmService) {
    this.films$ = this.datiService.getAll()
  }

  add() {
    this.isAdd = !this.isAdd;
  }

  canc(id: number) {
    this.datiService.canc(id).subscribe(res => {

      console.log(res);
      this.films$ = this.datiService.getAll()

    });
    // console.log("ho cancellato il Film")
  }

  update(Film: Film) {
    this.film = Film;
    this.add();
  }

  onFatto(fatto: boolean) {
    this.add();
    this.film = new Film();
    if (fatto)
      this.films$ = this.datiService.getAll()
  }

  prenota(film: Film) {
    film.prenotato = !film.prenotato;
    if (film.id != 0) {
      this.datiService.update(film).subscribe();
    }
  }

}
