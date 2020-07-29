### // -- Agregar Imagen centre en el Header -- //

  Agregar una imagen en el header svg y centralizar

  En el home.page.html agreamos el ion-header


### OPCION 1 

  Creamos en src/assets la carpeta imgs dentro de la carpeta ingresamos la imagen svg

### home.page.html 

      <ion-header>
        <ion-toolbar>
          <ion-title>
        <!-- Llamamos a la img dentro de la ruta-->
            <img style="max-width: 65%;" src="../../assets/imgs/nombre_imagen.svg">
          </ion-title> 
        </ion-toolbar>
      </ion-header>

  Si declaramos los scss universale no agreamos nada al home.page.scss igual dejamos la
  opcion 2 de encuadre en la vista de la imagen en el home

  ### OPCION 2 


### home.page.ts 

      <ion-header >
        <ion-toolbar>
          <ion-title>
          <!-- Imagen del titulo en svg poner atencio al max-width
            <img style="max-width: 65%;" src="../../assets/imgs/logo.svg">
          </ion-title>
      <!-- Boton Menu a la derecha puede ir cualquier boton -->
          <ion-buttons slot="end">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>

        </ion-toolbar>
      </ion-header>

  En el scss declarar ion-tittle

### home.page.scss 

      ion-title {
        position: absolute;
        left: -14px;
        padding: 0px 89px 60px;
        width: 109%;
        height: 100%;
        text-align: center;
      }