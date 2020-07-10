// -- Traer imagen del servidor --//


* Traeremos una imagen del servidor por ejemplo perfil desde nuestro servidor

* Supongamos que tenemos una pagina con el nombre perfil

--- perfila.page.ts ---

// Creamos el import de la api que contiene el postData de consulta ya lo hemos dado pero lo repasaremos

// Servicio Api

import { ApiConnect } from '../../system/api';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

// Declaramos la variable publica 
public perfilUrl: String;


//Agregamos el servicio en el constructor
  constructor(public auth: ApiConnect) {


// Variable declarada string le pasamos el valor de api la ruta de la img
    this.perfilUrl = auth.getImgPerfil();

   }

  ngOnInit() {
  }
 
}

--- fin perfil.page.ts ---

* Para completar debemos tener la id del usuario o mejor ya en la tabla tener creada la columna imagen con el nombre supongamos que la dentro de la tabla USUARIOS tenemos la columna imagen siendo string de 255 con el nombre Perfil_1 el _1 es la id dentro del capitulo 15 veremos como cargar imagenes al sevidor con el nombre de id.

* Asi que creamos dentro de USUARIOS en la base de datos con el nombre imagen string longitud 255 y con un valor predeterminado Demo.jpg esta imagen es una imagen predeterminada que se encontrara en la ruta de la api:

--- Ejemplo api.ts ---

 //Ruta de la imagen perfil

    perfilurl = 'http://tu-web/imagenes/perfil/';

--- fin Ejemplo api.ts ---

* Dentro de la carpeta perfil del servidor colocamos una imagen con el nombre Demo.jpg


* Si hicimos el login se guardara el userData en el localstorage del equipo con los valores en un array de la tabla USUARIOS siendo user_id, email, constrase;a y ahora imagen.

* Para que sea posible llenar el nuevo valor del array userData no nos olvidemos de la consulta en el index.php de slim framework, agregando imagen a la consulta del login.


--- Ejemplo Index.php ---

//ANTES
$sql = "SELECT user_id,email FROM usuarios WHERE email=:email and password=md5(:password) ";

// DESPUES

$sql = "SELECT user_id,imagen,email FROM usuarios WHERE email=:email and password=md5(:password) ";


--- Fin Ejemplo index.php


* Declararemos los valores del userData en el ts perfil.page.ts

--- perfil.page.ts ---

// Dentro del export cargamos el array del user data

export class PerfilPage implements OnInit {

     //Trae el valor del array almacenado desde un principio de la aplicacion
  userData = {
    imagen: ""
  };

// Dentro del constructor traemos el array del localStorage y se la pasamos ala variable userData

constructor(public auth: ApiConnect) {

// Variable declarada string le pasamos el valor de api la ruta de la img
    this.perfilUrl = auth.getImgPerfil(); 

// Traemos el array userData del localStorage
const data = JSON.parse(localStorage.getItem('userData'));

// Le pasamos los valores al userData variable
this.userData = data.userData;

   }

--- Fin perfil.page.ts  ---


* Al obtener un nombre de la tabla pasamos a realizar la vista y mostrar la imagen

* En perfil.page.html traeremos la imagen en un img


--- perfil.page.ts ---

<!-- Dentro del content nos trae la ruta mas el nombre del array  -->

  <img class="imgPerfil"  [src]="'' + perfilUrl + userData.imagen + ''">


--- FIn perfil.page.ts ---

