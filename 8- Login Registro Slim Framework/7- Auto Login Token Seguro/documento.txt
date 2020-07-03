//-- Crear metodo seguro Token Auto Login --//

* Cuando realizamos el login debemos cambiar ciertos patrones en el momento de logearnos

* En el ejemplo Numero 5 tenemos login lo que vamos a traer es el token de autenticacion

* Cambiar datos login


--- login.page.ts ---


// Dentro de la funcion login() declaramos que en la respuesta guarde en el localstorage el token

// ANTES

// Funcion Login
  login(){
   
        if(this.userData.email != "" && this.userData.password != ""){
         this.auth.postData(this.userData, "login").then((result) =>{
         //guardo en el localstorage
          localStorage.setItem("usuario", this.userData.email);
          localStorage.setItem("clave", this.userData.password);
       
         
         this.resposeData = result;
        
        
          
         if(this.resposeData.userData){  
         //Guarda todo el contenido de la consulta en el localstorage como array
          
          localStorage.setItem('userData', JSON.stringify(this.resposeData) );
        
        // Login correcto envia a una pagina para eso declarar import router
                this.router.navigate(['/home']);
               
            }else if(this.resposeData.error){
           console.log("ERROR");
            } 
         }, (err) => {
       //  loader.dismiss();
        console.log("ERROR");
         });
        }
        else{
     console.log("ERROR");
        }
       
       }

}

// DESPUES

// Funcion Login
  login(){
   
        if(this.userData.email != "" && this.userData.password != ""){
         this.auth.postData(this.userData, "login").then((result) =>{
         //guardo en el localstorage
          localStorage.setItem("usuario", this.userData.email);
          localStorage.setItem("clave", this.userData.password);
       
         
         this.resposeData = result;
        
        
          
         if(this.resposeData.userData){  

// GUARDAR Token
  window.localStorage.setItem('token', this.resposeData.userData.token);

         //Guarda todo el contenido de la consulta en el localstorage como array
          
          localStorage.setItem('userData', JSON.stringify(this.resposeData) );
        
        // Login correcto envia a una pagina para eso declarar import router
                this.router.navigate(['/home']);
               
            }else if(this.resposeData.error){
           console.log("ERROR");
            } 
         }, (err) => {
       //  loader.dismiss();
        console.log("ERROR");
         });
        }
        else{
     console.log("ERROR");
        }
       
       }

}

--- fin login.page.ts ---


* Una vez tenemos el token el cual es unico del servidor vamos a app.component.ts 


--- app.components.ts ---

// Cambiamos la autenticacion de si usuario es null por token en la funcion verificarLogin()


//ANTES

verificarLogin(){

    // Traemos los valores del local storage
    var verificar = window.localStorage.getItem('usuario');
  
     console.log(verificar);
    // Verificamos si el valor Existe
    if (verificar===null){
      this.router.navigate(['/register']);
  }else {
  
    console.log("Error");
  
  }
  
  }


// DESPUES

verificarLogin(){

    // Traemos los valores del local storage
    var verificar = window.localStorage.getItem('token');
  
     console.log(verificar);
    // Verificamos si el valor Existe
    if (verificar===null){
      this.router.navigate(['/register']);
  }else {
  
    console.log("Error");
  
  }
  
  }

  --- fin app.components.ts ---


  * Este metodo nos permitira realizar un registro y redireccionamiento mas seguro.

  
