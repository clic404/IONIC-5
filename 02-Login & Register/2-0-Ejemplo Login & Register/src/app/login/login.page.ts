import { Component, OnInit } from '@angular/core';
//Agregamos la conexion System Api
import { ApiConexion } from '../../system/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  postData = {"email":""};
  userData = {"email":"", "password":""};

  constructor(public auth: ApiConexion) { 

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
