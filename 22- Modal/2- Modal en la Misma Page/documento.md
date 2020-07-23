### // -- Modal dentro de la misma Page -- //

    Podemos acortar mas la incorporacion de un modal como hemos visto en 1- Agregar modal podemos en la misma page trabajar con el ts aprovechando menos page.ts

    Vamos a agregar un Modal, dentro del home.page.ts agregamos los imports y demas components

### Home.page.ts

            // Import
            import { ModalController } from '@ionic/angular';
            

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

    Creamos una page la cual va a ser nuestra vista con el nombre modal.page.html

### modal.page.html

            <ion-content>

            <p>Prueba</p>

            </ion-content>

    Al final del export dentro del home.page.ts declaramos como si fuese otra page.ts

### home.page.ts

            @Component({
            selector: 'modal-page',
            templateUrl: './modal.page.html',
            styleUrls: ['./home.page.scss'],
            })
            export class MapModalPage {

            constructor() {}

            }   

    Si ponemos atencion aprovechamos el scss del home.. aqui podemos realizar consulta y vista diferente al home.page.ts     