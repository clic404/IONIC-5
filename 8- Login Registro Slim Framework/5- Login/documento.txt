//-- Crear Login en Ionic 5 slim Framework --//

* Realizaremos el login una vez este el registro correcto...

* Tenemos que tener configurado la api....

* Creamos la page login

* Dentro del login.page.ts vamos a crear import de servicios postdata

--- login.page.ts ---

// importamos el servicio de conexion

import { ApiConnect } from '../../system/api';
// Navegar entre paginas
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

// Dentro del export declaramos las variables

export class LoginPage { 

  //Vaiable de Respuesta  
  resposeData : any;
  // Creamos la variable que envia los valores de password y email como array
  userData = {"email":"", "password":""}; 
  // Variables que tome todos los valores 
  usuario: any;
  password: any;

// Agregamos el mismo parametro en el constructor

constructor(public auth: ApiConnect, private router: Router) { }

// Funcion Login
  login(){
   
        if(this.userData.email != "" && this.userData.password != ""){
         this.auth.postData(this.userData, "login").then((result) =>{
         //guardo en el localstorage
          localStorage.setItem("usuario", this.userData.email);
          localStorage.setItem("clave", this.userData.password);
       
         
         this.resposeData = result;
        
        
          
         if(this.resposeData.userData){  
         //Guarda todo el contenido de la consulta en el localstorage como array
          
          localStorage.setItem('userData', JSON.stringify(this.resposeData) );
        
        // Login correcto envia a una pagina para eso declarar import router
                this.router.navigate(['/home']);
               
            }else if(this.resposeData.error){
           console.log("ERROR");
            } 
         }, (err) => {
       //  loader.dismiss();
        console.log("ERROR");
         });
        }
        else{
     console.log("ERROR");
        }
       
       }

}


--- fin login.page.ts ---


* Crearemos el ingreso en home.page.html 


--- home.page.html

<!-- Dentro del content agregamos el div con los datos de input -->

<ion-content>
  <div >
    <ion-item>
      <ion-label floating class="titulos"> Correo</ion-label>
    <ion-input type="text" [(ngModel)]="userData.email"></ion-input>
  </ion-item>
  <ion-item>
    <ion-label floating class="titulos"> Clave</ion-label>
  <ion-input type="password" [(ngModel)]="userData.password"></ion-input>
  </ion-item>
  </div>
  <div class="btn-login"><button ion-button (click)="login()"><b>Ingresar</b></button></div>
  
  <!-- Cremos una funcion que nos rediriga a registrarse al fina dejare la funcion que debes ingresar debajo de la funcion login dentro de login.page.ts
  
  <h6>Todavia no tienes cuenta? <span><a class="titulos" (click)="Irregister()">Registrese Ahora</a></span></h6>
 
 
  </div> 
</ion-content>

--- fin login.page.html ---

* Ahora en el index.php de slim Framework crearemos el post y la funcion Login

--- index.php ---


// Llama el post a la funcion del php
$app->post('/login','login');
$app->post('/register','register');


// Login
function login() {

    $request = \Slim\Slim::getInstance()->request();
    $data = json_decode($request->getBody());

    try {

        $db = getDB();
        $userData ='';
        // Trae los valores al userData al principio
        $sql = "SELECT user_id,fname,email,mobile FROM usuarios WHERE email=:email and password=md5(:password) ";
        $stmt = $db->prepare($sql);
        $stmt->bindParam("email", $data->email, PDO::PARAM_STR);
        $stmt->bindParam("password", $data->password, PDO::PARAM_STR);
        $stmt->execute();
        $mainCount=$stmt->rowCount();
        $userData = $stmt->fetch(PDO::FETCH_OBJ);

        if(!empty($userData))
        {
            $user_id=$userData->user_id;
            $userData->token = apiToken($user_id);
        }

        $db = null;
         if($userData){
               $userData = json_encode($userData);
                echo '{"userData": ' .$userData . '}';
            } else {
               echo '{"error":{"text":"Bad request"}}';
            }


    }
    catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

--- fin index.php ---


*** Funcion ***

// ir a la page Registro

IrRegister(){

  this.router.navigate(['/register']);


}

*** fin Funcion ***