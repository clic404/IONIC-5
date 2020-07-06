// -- Agregar Menu lateral -- //

* En src/app/app.component.html preparamos el header y items del menuu

--- app.component.html ---

<ion-app>
  <ion-menu side="start" menuId="first" contentId="content1">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu Sixlan</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
      <ion-menu-toggle auto-hide="false">
        <ion-list lines="none">
          <ion-item [routerLink]="'/'">
            <ion-icon name="home" slot="start"></ion-icon>
            Home
          </ion-item>
          <ion-item routerLink="todos">
            <ion-icon name="list" slot="start"></ion-icon>
            <ion-label>
              Todos
            </ion-label>
          </ion-item>
          <ion-item routerLink="finance">
            <ion-icon name="cash" slot="start"></ion-icon>
            <ion-label>
              Finance
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-menu-toggle>
      <ion-item lines="none" (click)="isRemainder === 1 ? isRemainder = 0 : isRemainder = 1">
        <ion-icon name="notifications" slot="start"></ion-icon>
        Remainder
        <ion-icon slot="end" [name]="isRemainder? 'arrow-dropdown' : 'arrow-dropright'"></ion-icon>
      </ion-item>

      <ion-menu-toggle auto-hide="false">
        <ion-list lines="none">
          <ion-item menuclose [hidden]="!isRemainder" [routerLink]="['/notifications']"
            [queryParams]="{ type: 'birthday' }" menuClose class="sub-menu">
            <ion-icon name="calendar" slot="start"></ion-icon>
            Birthdays
          </ion-item>
        </ion-list>
      </ion-menu-toggle>
    </ion-content>
  </ion-menu>
  <ion-router-outlet id="main-menu"></ion-router-outlet>
</ion-app>

--- fin app.component.html ---

  * Agregamos al home.page.html en el header el menu...


  --- home.page.html ---

  <ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>
      Blank
    </ion-title>

<!-- Side menu button el slot en define derecha si introduces start lo coloca a la izq -->
<ion-buttons slot="end">

  <ion-menu-button autoHide="false"></ion-menu-button>
</ion-buttons>

  </ion-toolbar>
</ion-header>


--- fin home.page.html ---