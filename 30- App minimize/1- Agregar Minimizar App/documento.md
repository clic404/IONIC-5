### // -- Instalar Plugin Minimizar App -- //

    Instalamos los plugins para minimizar app dentro del proyecto por consola

            ionic cordova plugin add cordova-plugin-appminimize
            npm install @ionic-native/app-minimize

    En app.module.ts declarar import

### app.module.ts

            //Agregar import
            import { AppMinimize } from '@ionic-native/app-minimize/ngx';

            // En providers declarar el import
            providers: [
            StatusBar,
            SplashScreen,
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
            AppMinimize
            ],

