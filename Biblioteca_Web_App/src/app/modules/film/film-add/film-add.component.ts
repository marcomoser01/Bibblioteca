import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NumberValidatorsService } from '../domains/NumberValidatorsService';

import { FilmService } from '../services/film.service';
import { Film } from '../domains/film';

const listMsg = {
  titolorequired: "Il titolo è richiesto.",
  titolominlength: "Il titolo deve deve avere almeno 4 caratteri",
  autorerequired: "Il campo autore è obbligatorio.",
  duratarequired: "Il campo durata è obbligatorio.",
  oscarrequired: "Il campo oscar è obbligatorio.",
  prezzorequired: "Il prezzo di  deve essere inserito > 0.",
  prezzomin: "Deve essere maggiore di 0",
  prezzonan: "Il prezzo deve essere un valore >0"
};

@Component({
  selector: 'app-film-add',
  templateUrl: './film-add.component.html',
  styleUrls: ['./film-add.component.css']
})


export class FilmAddComponent implements OnInit {

  @Input() film: Film = new Film();
  @Output() fatto = new EventEmitter<boolean>();

  filmfrm: FormGroup;

  constructor(public datiService: FilmService, public fb: FormBuilder, private router: Router) {
    this.filmfrm = fb.group(new Film());
    if(datiService.film.id != -1) {
      this.film = {
        id: datiService.film.id,
        titolo: datiService.film.titolo,
        autore: datiService.film.autore,
        prezzo: datiService.film.prezzo,
        prenotato: datiService.film.prenotato,
        durata: datiService.film.durata,
        oscar: datiService.film.oscar
      }
      datiService.resetFilm();
    }
  }

  ngOnInit(): void {
    this.filmfrm = this.fb.group({
      id: [this.film.id],
      'titolo': new FormControl(this.film.titolo, [Validators.required, Validators.minLength(4)]),
      'autore': new FormControl(this.film.autore, [Validators.required]),
      'durata': new FormControl(this.film.durata, [Validators.required]),
      'oscar': new FormControl(this.film.oscar, [Validators.required]),
      'prezzo': new FormControl(this.film.prezzo, [NumberValidatorsService.min(0), NumberValidatorsService.max(1000)])
    });
  }


  onSubmit(film: Film) {
    if(!film.prenotato) {
      film.prenotato = false;
    }

    if (this.film.id != 0)
      this.datiService.update(film).subscribe(res => {
        this.fatto.emit(true);
        this.goToDashboard();
      }
      )
    else this.datiService.add(film).subscribe(res => {
      this.fatto.emit(true);
      this.goToDashboard();
    })

  }

  annulla() {
    this.fatto.emit(false);
    this.goToDashboard();
  }

  getErrorMessage_field(element: string) {
    let err = ""
    if (this.filmfrm.get(element).errors) {
      Object.entries(this.filmfrm.get(element).errors).forEach(
        ([errorName, errorValue]) => {


          err = listMsg[element + errorName];
        }
      );
    };
    return err;
  }

  goToDashboard() {
    this.router.navigate(['film/dashboard']);
  }




}
