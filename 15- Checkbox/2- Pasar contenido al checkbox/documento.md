//-- Pasar contenido a nuestro checkbox --//

* Le pasaremos contenido a nuestro checkboxs

* En nuestro home.page.ts ingresaremos debajo del export la variable declarada con un array.


--- home.page.ts ---

export class RegisterPage implements OnInit  {

  
  // Checkbox terminos y condiciones
    public checkbox = [
      { valor: 'He leído y acepto los términos y condiciones', isChecked: false }
    ];

    --- fin home.page.ts ---

    * Le pasaremos a la vista y declaramos con ngfor y ngmodel

    --- home.page.html ---

    <ion-item *ngFor="let item of checkbox">
    <ion-label >{{item.valor}}</ion-label>
    <ion-checkbox slot="start" [(ngModel)]="item.isChecked"></ion-checkbox>
  </ion-item>

  --- fin home.page.html ---