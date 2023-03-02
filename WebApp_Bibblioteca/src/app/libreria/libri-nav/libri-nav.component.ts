import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-libri-nav',
  templateUrl: './libri-nav.component.html',
  styleUrls: ['./libri-nav.component.css', '../../main-navbar/main-navbar.component.css']
})
export class LibriNavComponent {

  libreriaNavbar: boolean = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    
  constructor(private breakpointObserver: BreakpointObserver, public navbarService: NavbarService) {

    this.navbarService.get("libreria").subscribe(res => {
      this.libreriaNavbar = res;
    })

    this.navbarService.checkNavbarServiceValue('libreria');

  }

  

}
