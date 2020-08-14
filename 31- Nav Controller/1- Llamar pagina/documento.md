### // -- Llamar pagina y no regresar a las anteriores -- //

    Cuando llamamos a una pagina tenemos el problema que vuelva a abrir paginas que no precisamos como ejemplo login

    Una vez realizamos una comprobacion y queremos llamar una pagina eliminando la anterior que no haga un back usamos el plugin NavController

### home.page.ts

            //Creamos el import
            import { NavController } from 'ionic-angular';

            //Declaramos el constructor
            constructor(public navCtrl: NavController) {}

            // Dentro de la funcion llamamos a la page
            // No vuelve hacia atras
            this.navCtrl.setRoot('home');

