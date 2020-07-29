### // -- Agregar Camera Android -- //

Agregamos los plugins por consola

        ionic cordova plugin add cordova-plugin-camera

        npm install @ionic-native/camera

Importar el plugin a appModule

### app.module.ts

            // Agregamos el import
            import { Camera } from '@ionic-native/camera/ngx';

            // Agregamos camera en providers

            providers: [
            StatusBar,
            SplashScreen,
            Camera,
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],....





