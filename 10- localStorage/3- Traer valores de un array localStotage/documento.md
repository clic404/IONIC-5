//-- Traer valores del un array en el localStorage --//


* Supongamos que tenemo en el localStorage una array userData guardado para obtener lo haremos de la siguiente manera.


--- EJEMPLO ---

// Traemos el array userData del localStorage
const data = JSON.parse(localStorage.getItem('userData'));

// Le pasamos los valores al userData variable
this.userData = data.userData;


--- fin Ejemplo ---

* Para manipular this.userData debemos declarar la variable del array si queremos traer nombre debajo de export mostraremos un ejemplo con la declaracion 

userData = { imagen: "" };


--- home.page.ts ---


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  //Trae el valor del array almacenado desde un principio de la aplicacion
  userData = {
    imagen: ""
  };


  constructor() {

// Traemos el array userData del localStorage
const data = JSON.parse(localStorage.getItem('userData'));

// Le pasamos los valores al userData variable
this.userData = data.userData;

   }

  ngOnInit() {
  }
 
}

--- fin home.page.ts ---