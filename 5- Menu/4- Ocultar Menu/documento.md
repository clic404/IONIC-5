### Ocultar Menu 

    En la page login o la que no quieras que realices swipe invoca a menu controller. En login.page.ts agregamos lo siguiente:

### login.page.ts

            // Agregamos el import
            import {MenuController } from '@ionic/angular';
            // En el constructor declaramos el import
            constructor(public menuCtrl: MenuController)
            {
             Desabilitamos el menu
             this.menuCtrl.enable(false);


            }