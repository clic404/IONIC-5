//-- Crear un Form contacto --//

* Crearemos un form de contacto enviar mensaje

* Trabajando bajo la estructura de slim framework realizamos lo siguiente

* Creamos la pagina contacto

--- contacto.page.ts ---

// importamos el api

// Servicio Api

import { ApiConnect } from '../../system/api';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

// Declaramos el postData

postData = {
    email: "",
    asunto: "",
    mensaje: ""
  };

  // Declaramos el ResponseData
    resposeData: any;

//Agregamos al constructor ApiConnect
  constructor(public auth: ApiConnect) { 

  
  }

  ngOnInit() {
  }

//Creamos la funcion enviarMensaje lo cual recibira el objeto form de la vista html
  enviarMensaje(form) {

// Pasamos los valores del form al postData
    this.postData.email = form.value.email;
    this.postData.asunto = form.value.asunto;
    this.postData.mensaje = form.value.mensaje;

//Conectamos con la api enviando los datos
    this.auth.postData(this.postData, "contacto").then(
      result => {
        this.resposeData = result;
        if (this.resposeData.entregado) {
         console.log("Enviado")
        } else {
          console.log("No fue Enviado");
        }
      },
      err => {
        //zest.dismiss();
      }
    );
  }

}

--- fin contacto.page.ts ---

* Creamos el html con la vista y el form

--- contacto.page.html ---

<!-- Dentro del content agregamos el from -->

<form #form="ngForm" (ngSubmit)="enviarMensaje(form)">

  <div padding>

    <ion-item>
      <ion-input  name="email" type="text" placeholder="Email" ngModel required></ion-input>
    </ion-item>
  
    <ion-item>
      <ion-input  name="asunto" type="text" placeholder="Asunto" ngModel required></ion-input>
    </ion-item>

<br>
    <ion-item>
     
      <ion-textarea  rows="7" name="mensaje" placeholder="Mensaje" ngModel required></ion-textarea>

    </ion-item>


  </div>
  <br>
  <div padding>
    <ion-button  size="large" type="submit" [disabled]="form.invalid" expand="block">Enviar</ion-button>
  </div>

</form>


--- fin contacto.page.html ---

* En el Servidor agregamos la conexion mail en el php


--- index.php ---

// Llama el post a la funcion del php

$app->post('/contacto', 'contacto');

/**********************  CONTACTO *********************/
function contacto() {
        
    $request = \Slim\Slim::getInstance()->request();
    $data = json_decode($request->getBody());
    
    try {
        
        $email=$data->email;
        $asunto=$data->asunto;
        $mensaje=$data->mensaje;

        $from = $data->email;
        $to      = "tu_correo_para_recibir";
        $subject = $data->asunto;
        $message = $data->mensaje;
        $headers = "From:" . $from;
        
        mail($to, $subject, $message, $headers);

        if($email){
            $email != null;
            
            echo '{"entregado": ' . $email . '}';
            
            
            
        } else {
            echo '{"error":{"text":"No se pudo entregar"}}';
        }
        
    }
    catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}


--- fin index.php ---