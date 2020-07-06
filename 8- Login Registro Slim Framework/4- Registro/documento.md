//-- Registro IONIC 5 Slim Framework --//

* Realizaremos el registro de nuestra app hacia nuestro servidor con slim framework

* Creamos la pagina register

* importamos el servicio api que conecta a nuestra web 

--- register.page.ts ---

import { ApiConnect } from '../../system/api';

export class RegisterPage  {


// Definir array con los valores input
  userData = {"email":"", "password":""};
// Definir resposeData para traer la respuestas....
 resposeData : any;

// Declaramos en el constructor el import

constructor(public auth: ApiConnect) { }

/// Funcion Registrar
  register(){


             //Guardo en el localstorage
          localStorage.setItem("usuario", this.userData.email);
          localStorage.setItem("clave", this.userData.password);
    
        if(this.userData.email != ""  && this.userData.password != "" ){
         this.auth.postData(this.userData, "register").then((result) =>{
         this.resposeData = result;
         if(this.resposeData.userData){
               console.log("Ok");
            }else if(this.resposeData.error){
             console.log("Error");
            } 
         }, (err) => {

         console.log("Error");
           //Error de conexion
         });
        }
        else{
         console.log("Error");
        }
       
       }
}

--- fin register.page.ts ---

* Agregamos valores al html dentro del content

--- home.page.html ---

<ion-content>

  <div class="register">

    <h3>Registarse</h3>
    <div class="registerinput">   
    <ion-item>
      <ion-label floating > Correo</ion-label>
    <ion-input type="email"  [(ngModel)]="userData.email"></ion-input>
    </ion-item>
    <ion-item>
    <ion-label floating > Clave</ion-label>
    <ion-input type="password"  [(ngModel)]="userData.password"></ion-input>
    </ion-item>
    <h6>He leído y acepto los <span><a class="titulos" (click)="IrTerminos()">términos y condiciones</a></span></h6>
    </div>
    <div class="btn-register"><button ion-button (click)="register()"><b>Registrarse</b></button></div>
    </div>
</ion-content>

--- fin home.page.html ---

* En el index php comentamos lo siguiente

--- index.php ---

* Declaramos 

// Llama el post que recibe a la funcion del php
$app->post('/register','register');

$app->run();

/**********************  REGISTRO  *********************/

function register() {

    $request = \Slim\Slim::getInstance()->request();
    $data = json_decode($request->getBody());

    try {

        $db = getDB();
        $userData ='';
        $sql = "INSERT INTO usuarios(email, password)VALUES(:email,:pais,:password)";
        $stmt = $db->prepare($sql);
        $stmt->bindParam("email", $data->email,PDO::PARAM_STR);
        $stmt->bindParam("password",$data->password,PDO::PARAM_STR);
        $stmt->execute();
         if($lastid = $db->lastInsertId()){
                echo '{"userData": "Registrado"}';
                $db = null;
            } else {
               echo '{"error":{"text":"Bad request"}}';
            }


    }
    catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}


--- fin index.php ---

* Si deseamos que password se ingrese en md5 cambiamos la linea de consulta de esta manera

*** EJEMPLO ***

ANTES

$sql = "INSERT INTO usuarios(email, password)VALUES(:email,:pais,:password)";

DESPUES

$sql = "INSERT INTO usuarios(email, password)VALUES(:email,:pais,md5(:password))";

*** FIN EJEMPLO ***