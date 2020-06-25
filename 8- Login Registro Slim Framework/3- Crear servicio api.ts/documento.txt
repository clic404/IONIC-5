//-- Crear Servicio API --//

* Prepararemos el servicio y el postdata en system/api/api siendo el archivo api.ts 

* Creamos dentro de src la carpeta system dentro de system nuestro api.ts lo que nos conectara con todas las url que dispongamos y servicios

*** Ejemplo ***

src/
src/system
src/system/api.ts

*** Fin Ejemplo ***

* Preparamos la conexion http, agregamos en app.module.ts el import HttpClientModule y el servicio  de ApiConnect

---  app.module.ts ---

//Nuevo
import { HttpClientModule } from '@angular/common/http';

//Api
import { ApiConnect } from '../system/api';
// Agregamos en imports: HttpClientModule y en providers: ApiConnect
NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiConnect
  ],

  --- fin app.module.ts --


 * Dentro de src Crear un carpeta system una api y un archivo.ts quedando src/system/api.ts
* Nos disponemos a relacionar el api.ts

 --- api.ts ---

  // Agregamos los imports

  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';


  // Creamos el export para referenciar por todo el proyecto ApiConnect 

  @Injectable()
export class ApiConnect {

//Creamos la variable con la ruta el cual tendra la consulta.php

RutaUrl: string = 'http://tu web/app/';

// Dentro del constructor declaramos el HttpClient

constructor(public http: HttpClient) {}

 //Conexion Segura postData para enviar y recibir en todo el proyecto datos...
 
    postData(credentials, type){
      return new Promise((resolve, reject) => {
        let headers = new HttpHeaders();
        this.http.post(this.RutaUrl+type, JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            resolve(res);
            console.log(res);
          }, (err) => {
            reject(err);
            console.log(err);
          });
      });
  
    }

}
--- Fin api.ts ---


