### // -- Agregar Objeto a ion Select -- //

    Agregar objeto a ion Select al html

### Home.page.html

        <ion-list>
        <ion-list-header>
            <ion-label>
            Objects as Values (compareWith)
            </ion-label>
            </ion-list-header>

            <ion-item>
            <ion-label>Users</ion-label>
            <ion-select [compareWith]="compareWith">
            <ion-select-option *ngFor="let user of users">{{user.first + ' ' + user.last}}</ion-select-option>
            </ion-select>
            </ion-item>
            </ion-list>

    Dentro del home.page.ts en el export agregamos el arreglo

### Home.page.ts

          users: any[] = [
            {
                id: 1,
                first: 'Alice',
                last: 'Smith',
            },
            {
                id: 2,
                first: 'Bob',
                last: 'Davis',
            },
            {
                id: 3,
                first: 'Charlie',
                last: 'Rosenburg',
            }
            ];

