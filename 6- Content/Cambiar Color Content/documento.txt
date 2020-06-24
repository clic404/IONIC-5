/// --- Cambiar el color bacground en el content --- ///

* Cambiaremos el color del content en el proyecto

* En el home trae por defecto referencias id al home.page.scss

*** EJEMPLO ***

--- home.page.html ---

<ion-content [fullscreen]="true">
<!-- id="container" llama al scss dandole patrones y valores
  <div id="container">
    <strong>Ready to create an app?</strong>
    <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
  </div>
</ion-content>

--- fin home.page.html ---

--- home.page.scss ---

#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

--- fin home.page.scss ---

* Observamos en el home.page.scss que acondiciona todo su entorno

* Si queremos hacer el mismo contesto universal podemos realizar lo mismo en variables.scss
    por ejemplo si queremos cambiar el color backround para todas las page realizamos los siguiente

* En variables.scss dentro del root declaramos ion-content


*** EJEMPLO ***

--- variables.scss ---

/** Ionic CSS Variables **/
:root {

  // Color del content en todo el pproyecto
  ion-content{
    --ion-background-color:#000000;
}

}