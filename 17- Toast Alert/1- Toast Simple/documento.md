### // -- Toast Simple -- //

    Realizaremos un alert toast simple

    Dentro del home.page.ts procederemos a realizar un alert toast.

### Home.page.ts 

            // Importamos el Toast Controller
            import { ToastController } from '@ionic/angular';

            // Agregamos el contructor 
            constructor(public toastController: ToastController){

                 // Creamos la llamada a la funcion dentro del constructor llamamos a la funcion
            this.AlertToast();
            }




            // Creamos una funcion de prueba
            async AlertToast() {
                const toast = await this.toastController.create({
                message: 'Mensaje Prueba.',
                duration: 2000
                });
                    await toast.present();
            }

           