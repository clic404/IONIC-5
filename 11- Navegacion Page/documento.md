// --- Navegacion entre Page ---//

* Dentro de Ionic podemos navegar entre paginas de diferentes metodos.

*** OPCION 1 ***

* Modo por funcion import routing

* Agregamos en el home.page.ts el import Router

import { Router } from '@angular/router';

* Dentro del costructor declaramos Router

 constructor(private router: Router){}

 * Creamos la funcion irPage

 irPage(){
// Navega hacia la page  o nombre de la pagina 
 this.router.navigate(['/page']);

 }

 *** FIN OPCION 1 ***

* Navegar por navController

*** OPCION 2 ***

* Agregamos el import

import { NavController } from '@ionic/angular';

* Dentro del costructor declaramos Router

 constructor(private navCtrl: NavController){}

* Creamos la funcion irPage

 irPage(){
// Navega hacia la page  o nombre de la pagina 
 this.navCtrl.navigateForward(['/page']);
 
 }

 *** FIN OPCION 2 ***
