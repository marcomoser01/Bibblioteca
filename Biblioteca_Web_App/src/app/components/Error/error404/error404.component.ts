import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component {

  moduleCaller: String = 'home';

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
    let module = ['home', 'libreria', 'film'];
    let splitUrl = this.router.url.substring(1, this.router.url.length).split('/');
    let count = 0;
    let trovato: Boolean = false;
    do {
      if (module.includes(splitUrl[count])) {
        this.moduleCaller = splitUrl[count];
        trovato = true;
      }
      count++;
    } while (!trovato && count < splitUrl.length);
  }

  redirectTo(isHome: boolean) {
    if (isHome) {
      this.router.navigate([this.moduleCaller]);
    } else {
      this.document.location.href = 'https://www.youtube.com/watch?v=4RxTWY6Nl_k';
    }
  }

}
