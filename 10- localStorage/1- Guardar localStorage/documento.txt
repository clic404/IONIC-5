//-- Guardar en el LocalStorage --//

* Como ejemplo realizaremos comprobacion si esta registrado el usuario
* En el home.page.ts realizaremos un disparador automatico que guarde en nuestro LocalStorage cierta informacion

*** Ejemplo ***

localStorage.setItem('Login', "0");

*** Fin Ejemplo ***

* Ingresamos el localStorage dentro del constructor para que inicialmente se ejecute al arrancar la page home

--- home.page.ts ---

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {

// Disparar Login Verificacion LocalStorage true o false
    localStorage.setItem('Login', "0");

  }

}

--- fin home.page.ts ---