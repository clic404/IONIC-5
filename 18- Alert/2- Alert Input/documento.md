### //-- Alert Input --//


    Vamos a crear un alert con ingreso de datos para manipular informacion.

    Dentro del home.page.ts crearemos un alert con su import y constructor alertController como en el Ejercicio 1 Mensaje Alert

### home.page.ts 

            // Creamos la funcion ejemplo alert imput
            async alertMensaje() {
            const alert = await this.alertController.create({
            cssClass: 'primary',
            header: 'Titulo',
            inputs: [
                {
                    name: 'mensaje',
                    type: 'text',
                    placeholder: 'Mensaje'
                }
                ],
                buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                    console.log('Confirma Cancelar');
                    }
                }, {
                    text: 'Aceptar',
                    handler: () => {
                    console.log('Confirma Aceptar');
                    }
                }
                ]
            });

            await alert.present();
            }



