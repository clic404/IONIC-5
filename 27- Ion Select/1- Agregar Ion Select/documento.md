### // -- Agregar Ionc Select a nuestro Proyecto -- //

    Vamos a Agregar Ion Select a nuestro Proyecto

    Seleccion Simple

### Home.page.html

            <ion-list>
            <ion-list-header>
                <ion-label>
               Seleccion Simple
                </ion-label>
            </ion-list-header>

            <ion-item>
                <ion-label>Genero</ion-label>
                <ion-select placeholder="Seleccione Uno">
                <ion-select-option value="f">Femenino</ion-select-option>
            <ion-select-option value="m">Masculino</ion-select-option>
                </ion-select>
            </ion-item>

            </ion-list>


    Multiple Seleccion

### Home.page.html


            <ion-list>
            <ion-list-header>
                <ion-label>
                Multiple Seleccion
                </ion-label>
            </ion-list-header>

            <ion-item>
                <ion-label>Pets</ion-label>
                <ion-select multiple="true" [value]="['bird', 'dog']">
                <ion-select-option value="bird">Bird</ion-select-option>
                <ion-select-option value="cat">Cat</ion-select-option>
                <ion-select-option value="dog">Dog</ion-select-option>
                <ion-select-option value="honeybadger">Honey Badger</ion-select-option>
                </ion-select>
            </ion-item>
            </ion-list>

