import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

//creamos propiedad nuevas canciones, de tipo any que es un arreglo y se
//inicializa como arreglo vacio.
nuevasCanciones: any[] = [];

//creamos una nueva propiedad loading
loading:boolean;


  constructor( private spotify: SpotifyService) { 

    //inicializamos la propiedad loading:
this.loading = true;

    //cuando se inicialice el homeComponent se llama la funcon
    //getreleases de spotify
    this.spotify.getNewReleases()
    .subscribe((data:any )=> {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    });
  }

 

}
