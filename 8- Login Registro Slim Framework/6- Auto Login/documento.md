//-- Verificamos Auto login al inicio --//

* Si deseamos que nuestra app verifique si existe algun valor para tomar el si  o no

* Una vez tenemos listo el registro y login procedemos a realizar la comprobacion

* En app.component.ts creamos lo siguiente


--- app.components.ts ---

// Importamos router

import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
    // Agregamos el constructor
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }
// Llammos a la funcion
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.verificarLogin();
    });
  }
// Creamos la Funcion 

  verificarLogin(){

    // Traemos los valores del local storage
    var verificar = window.localStorage.getItem('usuario');

    // Verificamos si el valor Existe
    if (verificar===null){
      this.router.navigate(['/login']);
  }else {
  
    console.log("Error");
  
    }
  }
}

--- fin app.component.ts --