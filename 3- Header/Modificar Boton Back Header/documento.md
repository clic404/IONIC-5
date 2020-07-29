### //-- Modificar Boton back en header --//

  En el header dentro del toolbar agregar un ion-buttons con icon ejemplo


### EJEMPLO

### codigo
      <!-- posiciona atras a ala derecha slot="start" -->
      <ion-buttons slot="start" >
      <!-- [routerLink]="['/home'] vuelve al home con un icon arrow-back -->
      <ion-button [routerLink]="['/home']"><ion-icon name="arrow-back"></ion-icon></ion-button>
  
      </ion-buttons>


  Ejemplo Completo 

### home.page.html

      <ion-header>
        <ion-toolbar>
      <!-- posiciona atras a ala derecha slot="start" -->
      <ion-buttons slot="start" >
      <!-- [routerLink]="['/home'] vuelve al home con un icon arrow-back -->
      <ion-button [routerLink]="['/home']"><ion-icon name="arrow-back"></ion-icon></ion-button>
      </ion-buttons>
          <ion-title>
          Titulo
          </ion-title>
          <!-- Menu slot end lado derecho-->
          <ion-buttons slot="end" >
            <ion-menu-button autoHide="false"></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>