import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-film-nav',
  templateUrl: './film-nav.component.html',
  styleUrls: ['./film-nav.component.css','../../../components/main-navbar/main-navbar.component.css']
})
export class FilmNavComponent {

  filmNavbar: boolean = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    
  constructor(private breakpointObserver: BreakpointObserver, public navbarService: NavbarService) {

    this.navbarService.get("film").subscribe(res => {
      this.filmNavbar = res;
    })

    this.navbarService.checkNavbarServiceValue('film');

  }

  

}
