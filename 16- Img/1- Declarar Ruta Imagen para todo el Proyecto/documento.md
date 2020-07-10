//-- Declarar ruta para todo el proyecto --//

* Declararemos en la api la ruta de la imagen a traer en todo el proyecto, esto nos habilita a trabajar comodamente como para una galeria o foto del perfil que se encuentra dentro del servidor.


* Vamos a src/system/api.ts

--- api.ts ---

// Dentro del api lo repasaremos con los import 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiConnect {


    //Ruta de la imagen perfil

    perfilurl = 'http://tu-web/imagenes/perfil/';

    constructor(public http: HttpClient) { }
    

// Declaramos la imagen perfil
      getPerfilImagen(){

        return this.perfilurl;
      
      }
}

-- fin api.ts --

* En esta archivo api.ts solo se declaro como se trae una imagen, debemos tener en cuenta que hay que realizar una consulta que ya hemos especificado antes y en los siguientes repositorios.

