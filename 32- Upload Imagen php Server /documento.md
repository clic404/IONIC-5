### Subir Imagen php sin file Transfer

    Instalamos Plugin Camera
    
### Cordova

            ionic cordova plugin add cordova-plugin-camera
            npm install @ionic-native/camera

### Capacitor

            npm install cordova-plugin-camera
            npm install @ionic-native/camera
            ionic cap syn

     Agregamos HttpClientModule y camera  plugin en app.module.ts

### app.module.ts

            import { HttpClientModule } from '@angular/common/http';
            import { Camera } from '@ionic-native/camera/ngx';

            // Dentro de imports agregar HttpClientModule

                 imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],

            // Dentro de providers agregar camera
            providers: [ Camera,

    En el home.page.ts Agregamos el import y el constructor

### home.page.ts

            import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
            import { HttpClient } from '@angular/common/http';
            import { Observable } from 'rxjs';

            // Dentro del export declaramos la variables
            export class HomePage {

            image: any;
            imageData: string;
            imagen: string;
            // Otions de la imagen
            options: CameraOptions = {
                quality: 20,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
                saveToPhotoAlbum: false
            }
            //Agregamos el constructor
            constructor( private camera: Camera, private http: HttpClient) {}

            // Creamos la funcion openCamera
            openCamera(){
  
                this.camera.getPicture(this.options).then((imageData) => {
      
                this.imageData = 'data:image/jpeg;base64,' + imageData;
                console.log(this.imageData);
    
                this.imagen = this.imageData;

                }, (err) => {
                  // Handle error
                 alert("error "+JSON.stringify(err))
             });
            }

            // creamos la funcion upload
            upload(){
                let  url = 'https://sixlan.com/app/pruebas/upload.php';
                const date = new Date().valueOf();

                // Replace extension according to your media type
                const imageName = date+ '.jpeg';
                // call method that creates a blob from dataUri
                const imageBlob = this.dataURItoBlob(this.imageData);
                const imageFile = new File([imageBlob], imageName, { type: 'image/jpeg' })

                let  postData = new FormData();
                postData.append('file', imageFile);

                let data:Observable<any> = this.http.post(url,postData);
                data.subscribe((result) => {
                 console.log(result);
                });
            }
            // Creamos la funcion para convertir a binario
            dataURItoBlob(dataURI) {
                var binary = atob(dataURI.split(',')[1]);
                var array = [];
                for(var i = 0; i < binary.length; i++) {
                  array.push(binary.charCodeAt(i));
                }
             return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
            }
            }

    En el home.page.html crear la vista 

### home.page.html

            <ion-header [translucent]="true">
            <ion-toolbar>
             <ion-title>
                 Blank
             </ion-title>
            </ion-toolbar>
            </ion-header>

            <ion-content [fullscreen]="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                <ion-title size="large">Blank</ion-title>
                </ion-toolbar>
            </ion-header>

            <div id="container">
            <img [src]="imagen" >  
            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button (click)="openCamera()">
                    <ion-icon ios="ios-camera" md="md-camera"></ion-icon>
                </ion-fab-button>
            </ion-fab>

            <ion-button (click)="upload()" color="success">
                <ion-icon slot="icon-only" name="checkmark"></ion-icon>
            </ion-button>
            </div>
  
            </ion-content>

    Creamos el php para el upload

### Upload.php

            <?php


            $target_path = "uploads/";
 
            $target_path = $target_path . basename( $_FILES['file']['name']);
 
            if(move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
                header('Content-type: application/json');
                $data = ['success' => true, 'message' => 'Correcto'];
                echo json_encode( $data );
            } else{
                header('Content-type: application/json');
                $data = ['success' => false, 'message' => 'Error al subir!'];
                echo json_encode( $data );
            }
 
            ?>

    Creamos el htaccess para ingreso seguro servidor goodady

            RewriteEngine On

            #RewriteBase /app/

            Header add Access-Control-Allow-Origin "*"
            Header add Access-Control-Allow-Headers "origin, x-requested-with, content-type"
            Header add Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"

            RewriteCond %{REQUEST_FILENAME} !-f
            RewriteRule ^(.*)$ index.php [QSA,L]






