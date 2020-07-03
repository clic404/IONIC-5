//-- Crer Registro y login seguro token --//


* En register que documentamos en el capitulo 5 realizaremos un registro y login a la vez


--- registro.page.ts ---


// Creamos la funcion login debajo de la funcion register()


// Funcion Registrar llamamos a la funcion login()
  register(){


             //Guardo en el localstorage
          localStorage.setItem("usuario", this.userData.email);
          localStorage.setItem("clave", this.userData.password);
    
        if(this.userData.email != ""  && this.userData.password != "" ){
         this.auth.postData(this.userData, "register").then((result) =>{
         this.resposeData = result;
         if(this.resposeData.userData){
               console.log("Ok");
               // Llamamos a la funcion login
                this.login();

            }else if(this.resposeData.error){
             console.log("Error");
            } 
         }, (err) => {

         console.log("Error");
           //Error de conexion
         });
        }
        else{
         console.log("Error");
        }
       
       }
}

    // Funcion Login
  login(){
   
         this.auth.postData(this.userData, "login").then((result) =>{
         this.resposeData = result;
         if(this.resposeData.userData){
           //trae el valor especifico y lo coloca en el localstorage
          window.localStorage.setItem('token', this.resposeData.userData.token);
          localStorage.setItem('userData', JSON.stringify(this.resposeData) );
                 // Al verificar token nos redirecciona al Home    
              this.router.navigate(['/home']);
               
            }else if(this.resposeData.error){
          
            } 
         }, (err) => {
      
         });
       }


--- fin register.page.ts ---