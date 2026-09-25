import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'peliculas',
    pathMatch: 'full'
  },

  {
    path: 'peliculas',
    loadComponent: () =>
      import('./pages/peliculas/peliculas.page')
        .then(m => m.PeliculasPage)
  },

  {
    path: 'detalle-pelicula/:id',
    loadComponent: () =>
      import('./pages/detalle-pelicula/detalle-pelicula.page')
        .then(m => m.DetallePeliculaPage)
  }

];
