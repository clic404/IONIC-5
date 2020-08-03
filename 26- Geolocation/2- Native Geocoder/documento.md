### // -- Agregar Geocoder Ionic -- //

    Agregar los plugins de geocoder terminal

            ionic cordova plugin add cordova-plugin-nativegeocoder
            npm install @ionic-native/native-geocoder

    Dentro de app.module.ts declarar el plugin

### app.module.ts

            // Agregar Import
            import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

            // Dentro de providers declarar el import

            providers: [
            StatusBar,
            SplashScreen,
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
            Geolocation,
            NativeGeocoder,
            Camera
            ],
