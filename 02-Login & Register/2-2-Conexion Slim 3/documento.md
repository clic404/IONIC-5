# CONEXION API Slim Framework 3 

- Realizaremos una conexion api php slim framework 3
- Aqui puede acceder a la conexion API slim Framework

- Prepararemos la conexion hacia el servidor desde nuestra app
- Creamos dentro de src la carpeta system y dentro el archivo api.ts

src/system/api.ts


### api.ts
```sh
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class ApiConexion {

//########### RUTA CONEXION ###########//

RutaUrl: string = 'https://NAME_WEB.com/api/';

    constructor(public http: HttpClient) { }
  
    //PostData consulta general con credenciales slim
    postData(credentials, type){
  
      return new Promise((resolve, reject) => {
        let headers = new HttpHeaders();
        this.http.post(this.RutaUrl+type, JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            resolve(res);
            console.log(res);
          }, (err) => {
            reject(err);
            console.log(err);
          });
      });
  
    }
  
}
```

- Dentro de login realizamos lo siguiente


### login.page.ts
```sh
import { Component, OnInit } from '@angular/core';
//Agregamos la conexion System Api
import { ApiConexion } from '../../system/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
//Declaramos el post
  postData = {"email":""};
// Recuperamos los datos
  userData = {"email":"", "password":""};

  constructor(public auth: ApiConexion) { 
//Llamamos a la funcion login a futuro se realiza desde boton
    this.login();
  }
  
  ngOnInit() {}

  //################### Funcion Login ################################# //
async login(){

  this.auth.postData(this.userData, "login").then(async (result) =>{
    
    console.log(result);
     
     });
  }
}
```

- Declaramos en src/app.module.ts ApiConexion y Http siendo la conexion que realizaremos


- Declaramos en src/app.module.ts ApiConexion y Http siendo la conexion que realizaremos

### app.module.ts

```sh
//Api
import { ApiConexion } from '../system/api';
import { HttpClientModule } from '@angular/common/http';
// Declaramos HttpClientModule en imports y ApiConexion en providers.
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ApiConexion,
  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

- Cambiamos la ruta para que inicie nuestra app en login y no en home por el momento

### app-routing.module.ts

```sh
//Modificamos la linea siguiente
path: '',
    //redirectTo: 'home',
    redirectTo: 'login',
    pathMatch: 'full'

```