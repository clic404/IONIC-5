### Solucionar problema de vista ios e android

    Para solucionar la compatibilidad de vista entre ambos dispositivos procederemos a realizar la compatibilidad asi que en app.module.ts en imports dentro de IonicModle.forRoot agregamos mode: 'md'

### Ejemplo

     imports: [BrowserModule, IonicModule.forRoot({mode: 'md'}), AppRoutingModule, HttpClientModule],  

      