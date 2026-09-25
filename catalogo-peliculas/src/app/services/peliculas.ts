import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private peliculas = [
    {
      id: 1,
      titulo: 'Interestelar',
      genero: 'Ciencia ficción',
      anio: 2014,
      duracion: 169,
      director: 'Christopher Nolan',
      descripcion: 'Un grupo de astronautas viaja a través de un agujero de gusano en búsqueda de un nuevo hogar.',
      disponible: true,
      imagen: 'assets/peliculas/interestelar.jpg'
    },
    {
      id: 2,
      titulo: 'Matrix',
      genero: 'Ciencia ficción',
      anio: 1999,
      duracion: 136,
      director: 'Lana y Lilly Wachowski',
      descripcion: 'Un programador descubre una realidad diferente.',
      disponible: true,
      imagen: 'assets/peliculas/matrix.jpg'
    },
    {
      id: 3,
      titulo: 'Titanic',
      genero: 'Drama / Romance',
      anio: 1997,
      duracion: 195,
      director: 'James Cameron',
      descripcion: 'Dos jóvenes de diferentes clases sociales se enamoran durante el viaje del Titanic.',
      disponible: false,
      imagen: 'assets/peliculas/titanic.jpg'
    }
  ];

  constructor() { }

  obtenerPeliculas() {
    return this.peliculas;
  }

  obtenerPeliculaPorId(id: number) {
    return this.peliculas.find(pelicula => pelicula.id === id);
  }
}