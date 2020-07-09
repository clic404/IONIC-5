//-- Pasar valor a una funcion --//

* Dentro del checkbox utilizaremos ionchange con el nombre de la funcion.

* Dentro del chechbox agregamos la funcion en la vista home.page.html con el valor Acepto

--- EJEMPLO ---

<!-- ANTES -->

 <ion-checkbox slot="start" [(ngModel)]="item.isChecked" ></ion-checkbox>

 <!-- DESPUES -->

  <ion-checkbox  slot="start" [(ngModel)]="item.isChecked" (ionChange)="aceptoTerminos('Acepto')"></ion-checkbox>


  --- FIN EJEMPLO ---


  * Dentro del ts declaramos la funcion pasando el termino desde la vista.

  * Dentro del export debajo del constructor agregamos

  --- home.page.ts ---

aceptoTerminos(aceptoTerminos){
// Nos msotrara el valor de la vista Nuevo estado Acepto
  console.log('Nuevo estado:' + aceptoTerminos);

}

--- Fin home.page.ts ---