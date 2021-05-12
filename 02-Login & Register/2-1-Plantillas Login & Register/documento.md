# CREAR PLANTILLA LOGIN & REGISTER

- Organizaremos la estructura de nuestro proyecto, esto refiere a comodidad del desarrollador de el como implementar su estructura y como acceder a la misma.

- Nuestro caso usaremos y comenzaremos en la carpeta src/app ya que dentro de la carpeta se encuentra los componentes, modulos y pages.

1- Crearemos una page con el nombre login y register

- Nos pedira en donde ubicarlo por ejemplo en app/page y el nombre que sera login

- Lo mismo realizamos para crear la page register

### Console / Terminal

```sh
ionic generate
```
2- Dentro de src/app/login -> login.page.html procedemos a agregar dentro del content el formato a presentar de la page login.

### login.page.html
```sh
 <div id="container"> 
    <ion-item>
      <ion-label floating class="title"> Email</ion-label>
    <ion-input type="text"></ion-input>
  </ion-item>
  <ion-item>
    <ion-label floating class="title"> Password</ion-label>
  <ion-input type="password"></ion-input>
  </ion-item>
  <br>
  <br>
 <button><b>Login</b></button>
</div>
  ```
- Vemos que estan definidas las clases que proporciona la vista css del formato login, ejemplo class title.

3- Modificamos el scss title y btn-login

- Centramos dentro de un div los textos e input dentro del scss #container.

### login.page.scss
```sh

    #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
  }
  
  #container button {
    height: 3.3rem;
    width: 10rem;
    border-radius: 7px;
    color: #000000;
    font-size: 1.2rem;
    background: #ffffff;
  }

  .title{
    color: #ffffff;
    font-size: 1rem;
    font-style: italic;
}

```

4- Dentro de src/app/register -> register.page.html procedemos a agregar dentro del content el formato a presentar de la page register.

### register.page.html
```sh

<div id="container">
    <div>   
    <ion-item>
      <ion-label floating > Email</ion-label>
    <ion-input type="email"></ion-input>
    </ion-item>
    <ion-item>
    <ion-label floating > Password</ion-label>
    <ion-input type="password"></ion-input>
    </ion-item>
    </div>
    <br>
    <br>
    <button><b>Register</b></button>
</div>

```

5- Modificamos el scss class title

- Centramos dentro de un div los textos e input dentro del scss #container.

### register.page.scss
```sh

    #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
  }
  
  #container button {
    height: 3.3rem;
    width: 10rem;
    border-radius: 7px;
    color: #000000;
    font-size: 1.2rem;
    background: #ffffff;
  }

  .title{
    color: #ffffff;
    font-size: 1rem;
    font-style: italic;
}

```

- Para visualizar en modo web ejecutamos el proyecto con:

```sh
ionic serve

```

- En la ruta como no se define la referencia hacia las paginas solo debemos cambiar la ruta de nuestro navegador:

ANTES
```sh
http://localhost:8100/home

```

DESPUES
```sh
http://localhost:8100/login

```