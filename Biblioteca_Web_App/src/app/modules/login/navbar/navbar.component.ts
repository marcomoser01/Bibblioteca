import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../../../components/main-navbar/main-navbar.component.css']
})
export class NavbarComponent {

  libreriaNavbar: boolean = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public navbarService: NavbarService) {

    this.navbarService.get("login").subscribe(res => {
      this.libreriaNavbar = res;
    })

    this.navbarService.checkNavbarServiceValue('login');

  }

}
