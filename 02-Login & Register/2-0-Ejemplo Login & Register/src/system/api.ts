import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class ApiConexion {

//########### RUTA CONEXION ###########//

RutaUrl: string = 'https://name_web.com/api/';

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