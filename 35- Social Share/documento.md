### Agregar Social Share

    Agregar npm ionic

            ionic cordova plugin add cordova-plugin-x-socialsharing
            npm install @ionic-native/social-sharing

    Agregar app.module.ts

            //Importamos nuestro Social Sharing plugin 
            import { SocialSharing } from '@ionic-native/social-sharing/ngx';

            // En el providers
            // Añadimos SocialSharing en Providers
            SocialSharing,

    En el home.page.ts agregamos las funciones

                // IMPORTAMOS SOCIAL SHARING.
                import { SocialSharing } from '@ionic-native/social-sharing/ngx';

                //Despues del export creamos lo que se va a compartir
                export class HomePage {

                text: string='Flamenco'
                imgurl:string= 'https://cdn.pixabay.com/photo/2019/12/26/05/10/pink-4719682_960_720.jpg'
                link: string='https://link.medium.com/JA4amAHFJ5'

                //Agregamos el constructor
                constructor(
                // NO OLVIDAR AÑADIR AL CONSTRUCTOR.
                private socialSharing: SocialSharing,
                ) {}
                // Creamos los share ejemplos
                ShareGeneric(parameter){
            const url = this.link;
            const text = parameter+'\n'
            this.socialSharing.share(text, 'MEDIUM', null, url)
            }
                ShareWhatsapp(){
                this.socialSharing.shareViaWhatsApp(this.text, this.imgurl, this.link)
                }

                ShareFacebook(){
                this.socialSharing.shareViaFacebookWithPasteMessageHint(this.text, this.imgurl, null /* url */, 'Copia Pega!')
                }

  SendEmail(){
    this.socialSharing.shareViaEmail('text', 'subject', ['email@address.com'])
  }

  SendTwitter(){
    this.socialSharing.shareViaTwitter(this.text, this.imgurl, this.link)
  }

  SendInstagram(){
    this.socialSharing.shareViaInstagram(this.text, this.imgurl)
  }


    Agregamos un grid en el home.page.html dentro de component

    <ion-grid>
    <ion-row class="ion-align-items-center">
      <ion-col size="8" style="height: 200px;">
        <ion-img style="height: 200px;" [src]="imgurl"></ion-img>
      </ion-col>
      <ion-col size="4">
          <ion-text>{{text}}</ion-text>
      </ion-col>  
      <ion-col size="12">
        <ion-text>{{link}}</ion-text>
      </ion-col>        
    </ion-row>
    <ion-row class="ion-align-items-center">
      <ion-col size="2">
        <ion-button color="light" (click)="ShareLink('text')"><ion-icon name="share-social-outline"></ion-icon></ion-button>
      </ion-col>
      <ion-col size="2">
          <ion-button color="warning" (click)="SendEmail()"><ion-icon name="mail-outline"></ion-icon></ion-button>
      </ion-col>
      <ion-col size="2">
        <ion-button color="primary" (click)="ShareFacebook()"><ion-icon name="logo-facebook"></ion-icon></ion-button>
      </ion-col>
      <ion-col size="2">
          <ion-button color="success" (click)="ShareWhatsapp()"><ion-icon name="logo-whatsapp"></ion-icon></ion-button>
      </ion-col>
      <ion-col size="2">
        <ion-button  color="secondary" (click)="SendTwitter()"><ion-icon name="logo-twitter"></ion-icon></ion-button>
      </ion-col>   
      <ion-col size="2">
        <ion-button color="tertiary" (click)="SendInstagram()"><ion-icon name="logo-instagram"></ion-icon></ion-button>
      </ion-col>    
    </ion-row>
  </ion-grid>  

