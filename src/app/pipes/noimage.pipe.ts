import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {
//hacer el pipe para los errores de imagenes inexistentes
  transform(images: any[] ): string {
//si no existen regresaremos una imagen que exista en mi proyecto

    if( !images){
      return '../assets/img/noimage.png';
    }

    if(images.length > 0){
      return images[0].url
    }else {
      return 'assets/img/noimage.png';
    }
  }

}
