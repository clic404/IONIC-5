### Declarar un alert dentro del otro

    Mostraremos en un alert otro alert, dentro de un alert simple declararemos otro alert

    Siguiendo con el alert del ejercicio 2- Alert Input realizaremos comprobacion de error.

    Dentro de la funcion alertMensaje dentro del handler trabajaremos con el otro alert

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
                    handler: async (inputs: { email: string}) => {

                        if(!inputs.email.trim()){
                            const alert = await this.alertController.create({
                            cssClass: 'secondary',
                            message: 'Debe escribir mensaje.', 
                            buttons: [{ text: 'Aceptar' }] 
                });
                await alert.present();
                }
                    console.log('Confirma Aceptar');
                    }
                }
                ]
            });

            await alert.present();
            }


