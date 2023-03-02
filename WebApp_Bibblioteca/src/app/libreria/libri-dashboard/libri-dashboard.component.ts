import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LibriService } from '../services/libri.service';
import { Libro } from '../domains/libro';

@Component({
  selector: 'app-libri-dashboard',
  templateUrl: './libri-dashboard.component.html',
  styleUrls: ['./libri-dashboard.component.css']
})

export class LibriDashboardComponent {

  displayedColumns: string[] = ['id', 'titolo', 'autore', 'prezzo', 'bottoni'];

  libri$: Observable<Libro[]> = new Observable<Libro[]>();
  isAdd: boolean = false;
  libro?: Libro = new Libro();

  constructor(public datiService: LibriService) {
    this.libri$ = this.datiService.getAll()
    //this.libri$.forEach(res => {console.log(res)});
  }

  add() {
    this.isAdd = !this.isAdd;
  }

  canc(id: number) {
    this.datiService.canc(id).subscribe(res => {

      console.log(res);
      this.libri$ = this.datiService.getAll()

    });
    // console.log("ho cancellato il libro")
  }

  update(libro: Libro) {
    this.libro = libro;
    this.add();
  }

  onFatto(fatto: boolean) {
    this.add();
    this.libro = new Libro();
    if (fatto)
      this.libri$ = this.datiService.getAll()
  }

  prenota(libro: Libro) {
    libro.prenotato = !libro.prenotato;
    if (libro.id != 0) {
      this.datiService.update(libro).subscribe();
    }
  }

}
