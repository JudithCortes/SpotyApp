import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

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
      'Authorization': 'Bearer BQD_kwGgyAjy6mDtw_zkbhhnyVSKu_8A5WxjIXghozAC2tgEMtl5cdp6tJbUmUcGl0eAiQ2mYTOdBbWzxC8'
    });
    //hacer la peticion hhtp.get con el url de spotify
    //con map se filtra la informacion recibida
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
    .pipe( map( data =>data['albums'].items));

  }

getArtista( termino:string){
  
  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQD_kwGgyAjy6mDtw_zkbhhnyVSKu_8A5WxjIXghozAC2tgEMtl5cdp6tJbUmUcGl0eAiQ2mYTOdBbWzxC8'
  });
  return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`)
   .pipe(map(data => data['artists'].items));
}

}
