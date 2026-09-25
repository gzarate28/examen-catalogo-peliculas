import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonBadge
} from '@ionic/angular';

import { PeliculasService } from '../../services/peliculas';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonBadge
  ]
})
export class PeliculasPage implements OnInit {

  peliculas: any[] = [];

  constructor(
    private peliculasService: PeliculasService,
    private router: Router
  ) {}

  ngOnInit() {
    this.peliculas = this.peliculasService.obtenerPeliculas();
  }

  verDetalle(id: number) {
    this.router.navigate(['/detalle-pelicula', id]);
  }
}