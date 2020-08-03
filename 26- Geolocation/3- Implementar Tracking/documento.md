### // -- Agregar Tracking Geolocation -- //

    Agregamos e importamos al home.page.ts los imports


### home.page.ts

            // Agergamos los import
            import { Geolocation } from '@ionic-native/geolocation';
            import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';

            //Dentro del Export declaramos las variables

            geoLatitude: number;
            geoLongitude: number;
            geoAddress: string;

            // Arreglo consulta Post 
            postData = {
            token: "",
            user_id:"",
            lat : "",
            lng:""
            };

            //Geocoder configuration
            geoencoderOptions: NativeGeocoderOptions = {
            useLocale: true,
            maxResults: 5
            };


            // En el constructor agregamos las variables de las librerias
            constructor(public toastController: ToastController, private nativeGeocoder: NativeGeocoder, private geolocation: Geolocation){


            //Llamamos a la funcion
            this.getgeolocation();

            }

            async getgeolocation(){

                var options = {
                enableHighAccuracy: true,
                timeout: 30000,
                maximumAge: 0,
                frequency : 30000
                };

                let me = this;

                this.geolocation.getCurrentPosition(options).then(async (resp) => {
                    console.log(resp.coords);

                    me.postData.lat = resp.coords.latitude.toString();
                    localStorage.setItem("latitud",  me.postData.lat);
                    me.postData.lng = resp.coords.longitude.toString();
                    localStorage.setItem("longitud", me.postData.lng);
                    let toast = await this.toastController.create({
                    message: "Su ubicacion es un exito..!",
                    duration: 5000,
                    position: 'bottom'
                    });
                    
                }).catch((error) => {
                console.log('Error al obtener la ubicación', error);
                });
            }

    Como observamos antes tenemos un postData para enviar la informacion a las variables, en este caso obtenemos la informacion guardada en el localStorage

    Mostraremos las coordenadas en el home.page.html dentro del content.

### // -- Home.page.html

            <ion-content>

            <!-- COORDENADAS -->
            <ion-item>
                <ion-label position="floating"  > Coordenadas</ion-label> 
                <div>
                <ion-input type="text" [(ngModel)]="postData.lat" ></ion-input>
                </div>
                <div>
                <ion-input  type="text" [(ngModel)]="postData.lng" ></ion-input>
                </div>
            </ion-content>


 





