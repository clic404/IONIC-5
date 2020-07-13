### // -- Pasar Valor a una Variable -- //

    Pasaremos un valor a una variable desde el alert, para continuar con esta funcion debemos repasar la logica de los ejercicios anteriores.

    Como observamos en el ejercicio 4- double alert mostraremos como pasar el valor del input

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
                    //MUESTRA EL INPUTS
                        console.log(inputs);
                    }
                }
                ]
            });

            await alert.present();
            }


    Desde el console podemos ver el inputs y desde ahi convertirlo en un avariable y pasar su valor a otra funcion.
    