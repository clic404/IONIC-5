### // -- Pasar Objeto una vez seleccionamos de un ION SELECT -- //

    Pasaremos la opcion seleccionada a una funcion para manipularla y como ejemplo la guardaremos en el localstorage

    Siguiendo el ejercicio 3- Ion Select Options y Objeto pasaremos a agregar  (ionChange) y [value]="item" [selected].

    Dentro de ion-select pasaremos estos parametros.

### home.page.html

            <ion-item >
                    <ion-label class="titulos" style="color: #5E6030!important;"> (Sub) Categorias</ion-label>
                    <ion-select  class="titulos" (ionChange)="ItemSelectCategoria(DatoItemCategoria.Nombre)" [(ngModel)]="DatoItemCategoria" >
                    <!-- Llama la consulta hacia el ts y trae las categorias -->
                <ion-select-option *ngFor="let item of Categoria"  [value]="item" [selected]="item.id == seleccionarCategoria">{{ item.Nombre }}
                </ion-select-option>    
                    </ion-select>
            </ion-item>


    Dentro del ts export declaramos la variable DatoItemCategoria que refiere al ngModel

### Home.page.ts

            //Datos Seleccionados Sub Categoria
            DatoItemCategoria: any;

    Creamos la funcion el cual le pasa los valores y lo guarda en el localStorage

### Home.page.ts

            ItemSelecSubcategoria(){
                //Guarda el valor en el localstorage
                localStorage.setItem('CategoriaNombre',this.DatoItemCategoria.Nombre);
            }

    