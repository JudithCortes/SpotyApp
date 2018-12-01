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
      'Authorization': 'Bearer BQATd4sDYKNVDlKizpHo7Pxso70Iu4XgBvlvMbhgiJJEraO4ICSZQeebd0h6F_9AJF9Myd-oUGX9aLE-8r4'
    });
    //hacer la peticion hhtp.get con el url de spotify
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
    //.subscribe(data =>{
      //console.log(data);
      //recibir la data e imprimirla
//})

  }

getArtista( termino:string){
  const headers = new HttpsHeaders({
    'Authorization': 'Bearer BQATd4sDYKNVDlKizpHo7Pxso70Iu4XgBvlvMbhgiJJEraO4ICSZQeebd0h6F_9AJF9Myd-oUGX9aLE-8r4'
  });
  return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`);
}

}
