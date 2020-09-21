### Marca de Agua en imagen ###

    Agregar marca de agua a una una image, pasamos a instalar el plugin 

            npm i @ionic-native/camera watermarkjs
            ionic cordova plugin add cordova-plugin-camera

    Como es de esperar agregamos a nuesto modulo lo siguiente

### app.module.ts

            import { Camera } from '@ionic-native/camera';

            // En provider declaramos Camera

            providers: [
                    StatusBar,
                    SplashScreen,
                    {provide: ErrorHandler, useClass: IonicErrorHandler},
                    Camera


    Ahora preparamos el home.ts

### home.ts

            //Importamos los import
            import { Camera, CameraOptions } from '@ionic-native/camera';
            import * as watermark from 'watermarkjs';

            // Dentro del export declaremos la ref
             export class IngresoPage implements OnInit {

            @ViewChild('previewimage') waterMarkImage: ElementRef;

            //Agregamos la variables
            image: any;
            imageData: string;
            imagen: string;
            public photos : any;

            //Creamos el options de la camera
            options: CameraOptions = {
            quality: 20,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            saveToPhotoAlbum: false
            }

            //Agregamos al constructor la camera
            constructor(private camera: Camera){}

            //Inicializamos la variable this.photos para agregar contenido

            ngonInit(){

            this.photos = [];
                
            }

            //Creamos la funcion para tomar la foto

            camara(){
            this.camera.getPicture(this.options).then((imageData) => {
            this.imageData = 'data:image/jpeg;base64,' + imageData;
            this.imagen = this.imageData;
            // Envio la imagen original a la imagen de agua para su conversion
            this.photos.push(this.imagen);
            this.photos.reverse();
            // llamo a la funcion agregar marca de agua
            this.agregarMarcadeagua();
            }, (err) => {
            // Handle error
            alert("error "+JSON.stringify(err))
            });
            }
            
            //Agregar Marca de agua funcion
            agregarMarcadeagua() {
            watermark([this.imagen, '../../assets/imgs/agua.png'])
                .image(watermark.image.lowerRight(0.9))
                .then(img => {
                this.waterMarkImage.nativeElement.src = img.src;
                });
            }


    Agregamos al home para visualizar

### home.page.html

            <!-- Dentro del content-->

            <ion-buttons>
            <button ion-button color="dark" (click)="takePhoto()"> Click here to take picture </button>
            </ion-buttons>

            <!-- IMAGEN -->

            <img  #previewimage>



