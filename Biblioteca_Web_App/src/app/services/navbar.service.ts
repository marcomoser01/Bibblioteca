import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NavbarService {

  $mainNav: Subject<boolean> = new Subject();
  $libreriaNav: Subject<boolean> = new Subject();  
  $filmNav: Subject<boolean> = new Subject();
  appComponentReload: boolean = false;


  constructor() {
    this.$mainNav.next(true);
    this.$libreriaNav.next(false);
    this.$filmNav.next(false);
  }

  get(bar: string) {
    switch (bar) {
      case "main": {
        return this.$mainNav;
        break
      }
      case "libreria": {
        return this.$libreriaNav;
        break
      }
      case "film": {
        return this.$filmNav;
        break
      }

    }
    return this.$mainNav;
  }

  sendNext(bar: string, valore: boolean) {
    switch (bar) {
      case "main": {
        return this.$mainNav.next(valore);
        break
      }
      case "libreria": {
        return this.$libreriaNav.next(valore);
        break
      }
      case "film": {
        return this.$filmNav.next(valore);
        break
      }
    }
  }

  getMainNav() {
    return this.$mainNav;
  }

  getLibreriaNav() {
    return this.$libreriaNav;
  }
  
  getFilmNav() {
    return this.$filmNav;
  }

  checkNavbarServiceValue(caller: String) {
    
    if(caller != 'main') {
      if(this.$mainNav.observed) {
        this.$mainNav.next(false);
      }
    }

    if(caller != 'libreria') {
      if(this.$mainNav.observed) {
        this.$libreriaNav.next(false);
      }
    }

    if(caller != 'film') {
      if(this.$mainNav.observed) {
        this.$filmNav.next(false);
      }
    }

  }


}
