### // -- Header y Toolbar Transparent -- //

    Vamos a dejar transparente el header con el toolbar...

    En el home.page.ts procedemos a modificar el header

### home.page.html

            <!-- Agregamos translucent -->
            <ion-header translucent   class="ion-no-border">
                <ion-toolbar >
            <!-- Menu slot end lado derecho-->
            <ion-buttons slot="start" >
            <ion-button class="color-back-button-header" [routerLink]="['/home']"><ion-icon name="arrow-back"></ion-icon></ion-button> 
            </ion-buttons>

                <!-- Menu slot end lado derecho-->
                <ion-buttons slot="end" >
                <ion-menu-button autoHide="false"></ion-menu-button>
                </ion-buttons>
            </ion-toolbar>
            </ion-header>

    Ahora en el mismo home.page.html en el content declaramos fullscreen

### home.page.html

            <ion-content [fullscreen]="true">

            <div   style="width: 100%; height: 100%; z-index: 1;"></div>
            
            </ion-content>           

    En el scss colocaremos la clase toolbar

### home.page.scss

            ion-toolbar {
            --background: transparent no-repeat fixed center;
            --color: black;
            position: absolute;
            top: 0;
            }   
         