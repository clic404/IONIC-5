//--- Conexion http IONIC 5 ---//

* Definir en app.module.ts el import http y el import donde se realiza la conexion en src/app/app.module.ts

---  app.module.ts ---

//Nuevo
import { HttpClientModule } from '@angular/common/http';

//Api
import { ApiConnect } from '../system/api/api';
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


  * Dentro de src Crear un carpeta system una api y un archivo.ts quedando src/system/api/api.ts
* Nos disponemos a relacionar el api.ts

  --- api.ts ---

  // Agregamos los imports

  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';


  // Creamos el export para referenciar por todo el proyecto ApiConnect 

  @Injectable()
export class ApiConnect {

//Creamos la variable con la ruta el cual tendra la consulta.php

consultaUrl: string = 'http://tu web/app/consulta.php';

// Dentro del constructor declaramos el HttpClient

constructor(public http: HttpClient) {}

// Creamos la funcion el cual retornara la ruta

getConsulta(){

return this.consulta.Url

   }
}
--- Fin api.ts ---

* En el archivo home.page.ts siendo la ruta src/app/home/home.page.ts

--- home.page.ts ---

// Importamos el system y HttpClient

import { ApiConnect  } from '../../system/api/api';
import { HttpClient } from '@angular/common/http';


// Declaro la variable  dentro del export, getConsulta y resposeData opte any sea todos los valores string int etc 
  
export class MapaPage {

  
  public getConsulta: any;
  resposeData: any;

// Dentro del constructor declaramos el ApiConnect y HttpClient

constructor(public api: ApiConnect, public http: HttpClient) {

// Le paso el valor del import a la vaiable getCoordenada
    this.getConsulta = api.getConsulta();
//llamo a la funcion consulta
    this.consulta();
   }

//Funcion traer consulta
   consulta() {
    this.http.get(this.getConsulta).subscribe(
      res => {
        this.resposeData = res;
        var consulta = this.resposeData.Consulta;
         console.log(res); // -> Visualiza el array
      },
      err => {
        console.log(err);
      }
    );
  }

}

--- FIN home.page.ts ---

* Creamos el php que nos traera la consulta

--- consulta.php ---

<?php

// Realiza las comprobaciones de header ante permisos de conexion //
if (isset($_SERVER['HTTP_ORIGIN'])) {

    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");

    header('Access-Control-Allow-Credentials: true');

    header('Access-Control-Max-Age: 86400');    // cache por un dia

}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))

        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))

        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);

}
// Fin permisos de conexion //

// Trae los valores del config conexion host
require "config.php";

// Conexion Simple fuera del login ni token

    $db = getDB();
    $sql="SELECT * FROM tabla";
    $SQL = $db->prepare($sql);
    $SQL->execute(); 
    $inicioSQL = $SQL->fetchAll(PDO::FETCH_OBJ);
    echo '{"Consulta": '. json_encode($inicioSQL) .'}';
	$db = null;
--- FIN consulta.php ---

* Dejamos la conexion para realizar

--- config.php ---

error_reporting(0);
session_start();

/* DATABASE CONFIGURACION */
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'usuario');
define('DB_PASSWORD', 'clave');
define('DB_DATABASE', 'Base de datos');
define("BASE_URL", "http://mi web/app/");

// Funcion de conexion get
function getDB() 
{
	$dbhost=DB_SERVER;
	$dbuser=DB_USERNAME;
	$dbpass=DB_PASSWORD;
	$dbname=DB_DATABASE;
	$dbConnection = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbConnection->exec("set names utf8");
	$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbConnection;
}

?>

/*******************************\
 *                              *
 *  Desarrollo : Fabian Melo    *
 *  Email : info@silan.com      *
 *  web : https://sixlan.com    *
 *                              *
 \******************************/