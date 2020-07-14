### // -- Loading Simple -- //

    Loading Simple lo que nos pemite realizar chequeos de conexion, pasaremos lo la incorporacion de los componentes para utilizar dicho loading.

    Dentro del home.page.ts comezamos de la siguiente manera.

### home.page.ts

            // Importamos el LoadingController
            import { LoadingController } from '@ionic/angular';

            @Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
            })
            export class HomePage {

            // Dentro del constructor declaramos el loading
            constructor(public loadingController: LoadingController) {}

            // crearemos un loading simple
            async MiLoading() {
            const loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Por Favor Espere...',
            duration: 2000
            });
                await loading.present();

                const { role, data } = await loading.onDidDismiss();
                console.log('Loading dismissed!');
            }
            }


