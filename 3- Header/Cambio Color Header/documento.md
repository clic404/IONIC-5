// -- Cambio color header -- //

* Cambiaremos el color del background header de diferentes maneras...


//// OPCION 1 ////

--- home.page.html ---

<ion-header >
<!-- Agregamos al toolbar color="primary" -->
  <ion-toolbar color="primary">
    <ion-title>
      Titulo
    </ion-title>
  </ion-toolbar>
</ion-header>

--- fin home.page.html ---

//// OPCION 2 ////

--- home.page.html ---

<!-- llamar al class del home.page.scss  color-toolbar -->

<ion-header   >
  <ion-toolbar class="color-toolbar"  >
    <ion-title>
      Titulo
    </ion-title>   
  </ion-toolbar>
</ion-header>

--- fin home.page.html ---

* Modificamos el scss

--- home.page.scss ---

.color-toolbar{
  --background: #54d61c;
}

--- fin home.page.scss ---

* si queremos hacer una clase para todo el proyecto lo tenemos que comentar en src/app/theme variables.scss y no en el 
    home.page.scss solo con llamar a la clase de cualquier page sera suficiente.

* Al comentarlo para que sea universal podemos definir un header con todo su entorno en todo el proyecto.






