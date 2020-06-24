//-- Cambiar Color Content Menu -- //

* Por defecto si declaramos un color content universal tomara el mismo
si el menu su vista de color esta en app.component.html podemos cambiar el color 
desde app.component.scss

* Ingresamos lo siguiente

--- app.component.scss ---

//Cambia contenido del menu
ion-menu{
    ion-content{
        --ion-background-color:#b92929;
    }
}

--- fin app.component.scss ---

