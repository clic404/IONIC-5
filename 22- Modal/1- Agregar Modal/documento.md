### // -- Agregar Modal al una Page -- //

    Vamos a agregar un Modal, dentro del home.page.ts agregamos los imports y demas components

### Home.page.ts

            // Import
            import { ModalController } from '@ionic/angular';
            import { ModalPage } from '../modal/modal.page';

            // Dentro del export en el constructor declaramos el elemento
            export class ModalExample {
            constructor(public modalController: ModalController) {}

            // Agregamos la funcion
            async presentModal() {
                const modal = await this.modalController.create({
                component: ModalPage,
                cssClass: 'my-custom-class'
                });
                return await modal.present();
            }

    Despues creamos un archivo con el nombre modal.page.ts y agregamos el codigo general.

### Home.page.ts

            import { Component, Input } from '@angular/core';

            @Component({
            selector: 'modal-page',
            })
            export class ModalPage {

            constructor() {}

            }
    Este modal cumple como otra page individual.


