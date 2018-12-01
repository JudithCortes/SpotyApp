import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  //forma automatica de importar servicios para no hacerlo manualmente en app.modules.ts
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log("servicio listo");

   }

  //hacer una peticion a API, crear un servicio
  getNewReleases(){
    //especificar los headers
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBRCqY_5xL2YJ0TMm8M7SeqpmiisCLmQIRlUrj4v8e03gYA_T3tY9v4wu7FMmXZVLoZezmqZdY78l99PMY'
    });
    //hacer la peticion hhtp.get con el url de spotify
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
    .subscribe(data =>{
      console.log(data);
      //recibir la data e imprimirla
    })

  }
}
