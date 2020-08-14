### // -- Minimizar Page -- //

    Minimizamos la App preparamos una vez cargamos e instalamos el plugin pasamos a crear la funcion en el home.page.ts

### home.page.ts

            //Importamos platform y appMinimize
            import { AppMinimize } from '@ionic-native/app-minimize/ngx';
            import { Platform } from '@ionic/angular';

            //Dentro del export declaramos el constructor
            constructor(private platform: Platform, private appMinimize: AppMinimize}
            {
            //Llamar la funcion
            this.minimizar();

            }

            //Crear funcion minimizar
            minimizar(){

            this.appMinimize.minimize();

            }

