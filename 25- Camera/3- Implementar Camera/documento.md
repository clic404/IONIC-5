### // -- Implementar Camera -- //

    Una vez agregamos los plugins y configuamos el entorno procedemos a crear la vista y funciones.

    En el home.page.ts configuramos el import

### home.page.ts

            // Agregamos el import
            import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

            // Dentro del export declaramos la variable de la imagen

            @Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
            })
            export class HomePage {
            // imagen Temporal
            ImgTemporal: string;
            // Otions de la imagen
            options: CameraOptions = {
                quality: 20,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
                saveToPhotoAlbum: false
            }
            //Agregamos al constuctor
            constructor(private camera: Camera) {}

            //Funcion camera

           camara() {
                this.camera.getPicture(this.options).then((imageData) => {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64 (DATA_URL):
                let base64Image = 'data:image/jpeg;base64,' + imageData;
                this.ImgTemporal = base64Image;
                window.localStorage.setItem('ImgTemporal', this.ImgTemporal);
                }, (err) => {
                console.log(err);
                // Handle error
                });
            }
            }

    En el html preparamos la vista de la imagen y llamamos a la funcion

### home.page.html

            <!-- Dentro del content -->

            <ion-content>
            <div class="ion-padding">
            <ion-button expand="full" (click)="camara()">
            Foto
            </ion-button>
     
            <img [src]="ImgTemporal" />
            </div>
            </ion-content>

