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

   getQuery(query: string){

    const url = `https://api.spotify.com/v1/${ query }`;

    //especificar los headers
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD_kwGgyAjy6mDtw_zkbhhnyVSKu_8A5WxjIXghozAC2tgEMtl5cdp6tJbUmUcGl0eAiQ2mYTOdBbWzxC8'
    });
    return this.http.get(url, {headers});

   }

  //hacer una peticion a API, crear un servicio
  getNewReleases(){

    //hacer la peticion hhtp.get con el url de spotify
    //con map se filtra la informacion recibida
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( data =>data['albums'].items));
  }

getArtista( termino:string){

  return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
   .pipe(map(data => data['artists'].items));
}

}
