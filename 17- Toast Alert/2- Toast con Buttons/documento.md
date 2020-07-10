### // -- Mensaje Toast con Click --//

    Procederemos a realizar un boton toast con detalle click

    Igual que en el ejercicio 2 ingresaremos todo igual

### Home.page.ts

           // Importamos el Toast Controller
            import { ToastController } from '@ionic/angular';

            // Agregamos el contructor 
            constructor(public toastController: ToastController){

                 // Creamos la llamada a la funcion dentro del constructor llamamos a la funcion
            this.AlertToastButton();
            }




            // Creamos una funcion de prueba
            async AlertToastButton() {
            const toast = await this.toastController.create({
                header: 'Toast header',
                message: 'Click cerrar',
                position: 'top',
                buttons: [
             {
                side: 'start',
                icon: 'star',
                text: 'Favorite',
                handler: () => {
                console.log('Un Click');
            }
            }, {
                text: 'Done',
                role: 'cancel',
                handler: () => {
                console.log('Cancel click');
                            }
                        }
                     ]
                });
            toast.present();
            }
