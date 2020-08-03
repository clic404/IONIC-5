### // -- Agregar Ion Select Option y enviar Objeto

    Pasaremos a realizar y traer de un array o consulta Json los objetos y tranajar sobre ellos.

    Suponemos que tenemos una consulta al servidor que nos trae categorias.

    El arreglo se veria de esta manera

### Arreglo

            Categoria: any[] = [
            {
                id: 1,
                Nombre: 'Autos',
            },
            {
                id: 2,
                fiNombrerst: 'Casas',
            },

    Dentro del home.page.ts el cual declaramos debajo del export la variable categoria

### Home.page.ts

            // Variable Categoria
            public Categoria: any[] = []; 

    Sabemos que public categoria le pasa de la consulta  del resultado sobre un postData

### Ejemplo reposeData

             this.SubCategoria = this.resposeData.CategoriaData;

    Ya que obtenemos el arreglo de la consulta dentro del content preparamos para visualizar el arreglo.

### Home.page.html

            <ion-content>
            
             <ion-item >
                    <ion-label class="titulos" style="color: #5E6030!important;"> (Sub) Categorias</ion-label>
                    <ion-select  class="titulos" >
                    <!-- Llama la consulta hacia el ts y trae las categorias -->
                <ion-select-option *ngFor="let item of Categoria" >{{ item.Nombre }}</ion-select-option>
          
                    </ion-select>
                        </ion-item>
            
            </ioncontent>
