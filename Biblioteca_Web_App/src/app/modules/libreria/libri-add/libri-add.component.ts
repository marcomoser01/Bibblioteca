import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

import { LibriService } from '../services/libri.service';
import { NumberValidatorsService } from '../domains/NumberValidatorsService';
import { Libro } from '../domains/libro';

const listMsg = {
  titolorequired: "Il titolo è richiesto.",
  titolominlength: "Il titolo deve deve avere almeno 4 caratteri",
  autorerequired: "Il campo autore è obbligatorio.",
  prezzorequired: "Il prezzo di  deve essere inserito > 0.",
  prezzomin: "Deve essere maggiore di 0",
  prezzonan: "Il prezzo deve essere un valore >0"
};

@Component({
  selector: 'app-libri-add',
  templateUrl: './libri-add.component.html',
  styleUrls: ['./libri-add.component.css']
})


export class LibriAddComponent implements OnInit {

  @Input() libro: Libro = new Libro();
  @Output() fatto = new EventEmitter<boolean>();

  librofrm: FormGroup;

  constructor(public datiService: LibriService, public fb: FormBuilder, private router: Router) {
    this.librofrm = fb.group(new Libro());
    if(datiService.libro.id != -1) {
      this.libro = {
        id: datiService.libro.id,
        titolo: datiService.libro.titolo,
        autore: datiService.libro.autore,
        prezzo: datiService.libro.prezzo,
        prenotato: datiService.libro.prenotato
      }
      datiService.resetLibro();
    }
  }

  numberValidator(control: FormControl) {
    if (isNaN(control?.value))
      return {
        nan: true
      }
    if ((1 * control?.value) <= 0)
      return {
        min: true
      }
    return null;
  }

  ngOnInit(): void {
    this.librofrm = this.fb.group({
      id: [this.libro.id],
      'titolo': new FormControl(this.libro.titolo, [Validators.required, Validators.minLength(4)]),
      'autore': new FormControl(this.libro.autore, [Validators.required]),
      'prezzo': new FormControl(this.libro.prezzo, [NumberValidatorsService.min(0), NumberValidatorsService.max(100000)])
    });
  }

  onSubmit(libro: Libro) {
    if (!libro.prenotato) {
      libro.prenotato = false;
    }
    if (this.libro.id != 0) {
      this.datiService.update(libro).subscribe(res => {
        this.fatto.emit(true);
        this.goToDashboard();
      })
    }
    else {
      this.datiService.add(libro).subscribe(res => {
        this.fatto.emit(true);
        this.goToDashboard();
      })
    }

  }

  annulla() {
    this.fatto.emit(false);
    this.goToDashboard();
  }

  getErrorMessage_field(element: string) {
    let err = ""
    if (this.librofrm.get(element).errors) {
      Object.entries(this.librofrm.get(element).errors).forEach(
        ([errorName, errorValue]) => {
          err = listMsg[element + errorName];
        }
      );
    };
    return err;
  }

  goToDashboard() {
    this.router.navigate(['libreria/dashboard']);
  }




}
