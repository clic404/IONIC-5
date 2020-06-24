//-- Agregar Fuente en todo el proyecto --//

* Vamos a colocar nuestras propias fuentes....
* Utilizaremos la fuentes Alegreya.ttf como ejemplo
* Dentro del src/assets creamos la carpeta fonts
* Vamos a variables.scss y declaramos las fuentes para usar en todo el proyecto

--- variables.scss ---

/*Fuentes Nuevas */


@font-face {
  font-family: 'AlegreyaSansSC';
  src: url('../assets/fonts/AlegreyaSansSC-Regular.ttf');
}

@font-face {
  font-family: 'AlegreyaSans';
  src: url('../assets/fonts/AlegreyaSans-Black.ttf');
}

--- fin variables.scss ---

* En cualquier scss podemos invocar a la fuente de la sigueinte manera

--- home.page.scss ---

.titulo{
    font-family: "AlegreyaSans", "Regular", sans-serif !important;
    color: #ffffff;
    font-size: 2.1em;
}

--- fin home.page.scss ---