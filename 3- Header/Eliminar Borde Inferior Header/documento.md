// --- Elimminar Borde Inferior en Header ---//

* En el home.page.scss agregar ion-header scss

//// OPCION 1 ////

--- home.page.scss ---

ion-header {
  &.header-md:after {
    background: none;
  }
}

--- fin home.page.scss ---


//// OPCION 2 ////

--- home.page.html ---
// Agregamos class="ion-no-border"
<ion-header class="ion-no-border" >
  <ion-toolbar>
    <ion-title>
      Titulo
    </ion-title>
  </ion-toolbar>
</ion-header>


--- fin home.page.html ---