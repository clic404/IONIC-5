### // -- Mensaje Alert -- //

    En este capitulo pasaremos a ingresar un alert mensaje simple

### Home.page.ts

            //Dentro del home agregamos el import
            import { AlertController } from '@ionic/angular';

            // Agregamos al costructor
            constructor(public alertController: AlertController){

            //Llamammos a la funcion para ver como queda
            this.AlertMensaje();

            }

            //Creamos la funcion
            async AlertMensaje() {
                const alert = await this.alertController.create({
                cssClass: 'alertcss',
                header: 'Alert',
                subHeader: 'Subtitle',
                message: 'This is an alert message.',
                buttons: ['OK']
                });

             await alert.present();
            }

    Dentro de variables.scss agregamos alertcss para poder modificar el aspecto tiene que ser global 

### variables.scss

            .alertcss {
            --background: #e5e5e5;
            }