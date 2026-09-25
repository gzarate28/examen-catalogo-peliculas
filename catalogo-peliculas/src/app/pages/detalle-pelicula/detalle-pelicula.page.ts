import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonButton,
  IonBadge
} from '@ionic/angular';

import { PeliculasService } from '../../services/peliculas';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.page.html',
  styleUrls: ['./detalle-pelicula.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonButton,
    IonBadge
  ]
})
export class DetallePeliculaPage implements OnInit {

  pelicula: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peliculasService: PeliculasService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.pelicula =
      this.peliculasService.obtenerPeliculaPorId(id);
  }

  volver() {
    this.router.navigate(['/peliculas']);
  }
}