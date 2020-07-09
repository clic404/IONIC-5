// -- Comprobaremos si es tru o false --//

* Supongamos que tenemos el contenido como en el ejercicio 2- Pasar contenido checkbox

* En el checkbox haremos pasando el valor como en 3- Pasar valor a una funcion, para despues checkear que opcion tomar.


* Supongamos que tenemos el html y un ionchange que pasa un valor ahora pasaremos el valor del comportamiento.

--- home.page.html ---

<ion-item *ngFor="let item of checkbox">
    <ion-label  class="titulo-terminos" [routerLink]="['/terminos']">{{item.valor}}</ion-label>
    <ion-checkbox class="checkbox" slot="start" [(ngModel)]="item.isChecked" (ionChange)="aceptoTerminos(item.isChecked)"></ion-checkbox>
  </ion-item>

--- fin home.page.html ---

* Si observamos le pasamos el item del array (ionChange)="aceptoTerminos(item.isChecked)"

* Ahora en el ts recibiremos el valor de true o false a la funcion

--- home.page.ts ---

aceptoTerminos(aceptoTerminos){

  if (aceptoTerminos == true){

  //Mensaje True;
  console.log("Acepto los terminos");

}else if(aceptoTerminos == false){

  // Mensaje false
  console.log("No acepto los terminos");

  }

}

--- fin home.page.ts ---

* No nos olvidemos que debe estar cargada el array dentro de la variable como el ejercicio 2- Pasar contenido al checkbox