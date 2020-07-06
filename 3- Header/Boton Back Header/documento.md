//--- Agregar boton back en el header --//


* Agregamos el boton back al header del page

--- home.page.html ---

<ion-header  class="ion-no-border header" >
  <ion-toolbar class="color-toolbar"  >
 <!-- Agregamos el boton back son slot start del lado izq y haciendo ref al home-->
 <ion-buttons slot="start" >
  <ion-back-button defaultHref="home"></ion-back-button>
</ion-buttons>
    <ion-title>
     Titulo
    </ion-title>
  </ion-toolbar>
</ion-header>


--- fin home.page.html ---
