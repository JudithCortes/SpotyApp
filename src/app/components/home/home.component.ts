import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  constructor( private spotify: SpotifyService) { 
    //cuando se inicialice el homeComponent se llama la funcon
    //getreleases de spotify
    this.spotify.getNewReleases();
  }

 

}
