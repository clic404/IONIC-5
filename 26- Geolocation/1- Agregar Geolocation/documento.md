### // -- Agregar Geolocation -- //

    Agregar geolocation en ionic en el terminal dentro del proyecto agregar el plugin 

            npm i geolocation
    
    Dentro de app.module.ts declarar el plugin

### app.module.ts

            // Agregar Import
            import { Geolocation } from '@ionic-native/geolocation/ngx';

            // Dentro de providers declarar el import

            providers: [
            StatusBar,
            SplashScreen,
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
            Geolocation,
            Camera
            ],

