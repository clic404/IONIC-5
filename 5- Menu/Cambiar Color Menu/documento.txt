// --- Cambiar Color Menu  --- //

* Podemos cambiar de varias maneras le llamaremos personal a cada page
    como universal que aplica a todas las paginas....

* Dentro del home.page.html en ion-menu-button declaramos el style

*** OPCION 1 ***

--- home.page.html ---

<ion-header>
  <ion-toolbar>
    <ion-title>
      Titulo
    </ion-title>
    <!-- Menu slot end lado derecho-->
    <ion-buttons slot="end" >
     <!-- Color al boton con style -->
      <ion-menu-button style="color: black;" autoHide="false"></ion-menu-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

--- fin home.page.html ---

* Si queremos que el menu su color este en todas las paginas declaramos dentro del root en variables.scss

*** OPCION 2 ***

--- variables.scss ----

/** Ionic CSS Variables **/
:root {

ion-menu-button{

  --color: #eb661e;
}

}

--- fin variables.scss ---

NOTA: hay variables que si podemos declarar universal y otras que nodependiendo de nuestro proyecto
