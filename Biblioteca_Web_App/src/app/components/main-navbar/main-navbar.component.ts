import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent {


  mainBar: boolean = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public navbarService: NavbarService) {

    this.navbarService.get("main").subscribe(res => {
      this.mainBar = res;
    })

    //al momento se torno indietro con la freccia non mi mostra il menù
    this.navbarService.checkNavbarServiceValue('main');
  }



}
