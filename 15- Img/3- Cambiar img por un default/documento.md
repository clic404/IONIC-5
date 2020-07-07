//-- Cambiar imagen si por una imagen default --//

* Tenemos una imagen predeterminada en assets dentro de nuestro dispositivo, lo que haremos es si al traer un array y el valor imagen no tiene datos colocar con *ngIf la imagen predeterminada.

* Dentro de assets tenemos un svg con el nombre foto_vacia.svg

* Ahora en la vista solo utilizamos el *ngIf

--- home.page.ts ---

<!--Dentro del content-->

<!-- Pirmer img con la ruta de la imagen de un array-->
  <img class="imgPerfil"  [src]="'' + perfilUrl + userData.imagen + ''">
  <!-- Imagen default con el *ngIf="!userData.imagen" si no existe superpone la imagen de lo contrario desaparece-->
  <img class="imgPerfil" *ngIf="!userData.imagen" src="../../assets/imgs/fotografia_vacia_mi_perfil.svg">


  --- fin home.page.ts ---