### // -- Minimizar Page solo en el home -- //

    Minimizamos la App preparamos una vez cargamos e instalamos el plugin pasamos a crear la funcion en el home.page.ts

    creamos dentro del constructor un if si es la page va a minimizar

### home.page.ts

            //Importamos platform y appMinimize
            import { AppMinimize } from '@ionic-native/app-minimize/ngx';
            import { Platform } from '@ionic/angular';

            //Dentro del export declaramos el constructor
            constructor(private platform: Platform, private appMinimize: AppMinimize}
            {
            
            // Verifico si es la pagina home si es asi minimizo
            this.platform.backButton.subscribe(()=>{

            if(this.router.url === '/home')
            {
                this.appMinimize.minimize();
            }

            }


            

