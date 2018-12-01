import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
//se inyecta para tener a mi disposicion todos las propiedades y métodos que http tiene
//hacer peticiones get
  constructor(private http: HttpClient) { 
    console.log('constructor del home llamado');
    //hacer una peticion get, suscribirme cuando se ejecuta
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe(paises =>{
      //al hacer esta llamada tendre toda la data guardada en paises
      console.log(paises);
    })
  }

  ngOnInit() {
  }

}
