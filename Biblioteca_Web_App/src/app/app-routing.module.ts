import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './components/Error/error404/error404.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'libreria',
        loadChildren: () =>
            import('./modules/libreria/libreria.module').then((m) => m.LibreriaModule),
    },
    {
        path: 'film',
        loadChildren: () => import('./modules/film/film.module').then((m) => m.FilmModule),
    },
    {
        path: '**',
        component: Error404Component,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
