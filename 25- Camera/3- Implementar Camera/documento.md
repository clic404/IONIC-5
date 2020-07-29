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
            ImgTemporal: string;

            //Agregamos al constuctor
            constructor(private camera: Camera) {}

            //Funcion camera

            camara() {
            const options: CameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA
            };

            this.camera.getPicture(options).then( ( imageData ) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.ImgTemporal = base64Image;
            }, (err) => {
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

