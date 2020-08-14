### // -- Cerrar app  Back Button -- //

    Cerrar app con back button en una page especifica

### home.page.ts

            // Agregamos al import platform
            import { Platform } from '@ionic/angular';

            //Dentro del export en el constructor declaramos el platform
            constructor(private platform: Platform}
            {
                //Dentro del constructor creamos la instruccion
                / Verifico si es la pagina login si es asi salgo de la app
                this.platform.backButton.subscribe(()=>{

                if(this.router.url === '/login')
                {
                    navigator['app'].exitApp();
                }

            });
                
            }

