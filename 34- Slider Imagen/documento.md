### // Slider Imagen // ###

  Agregar Sliders con tres imagenes y que no se muestre si esta sin imagen

### home.page.ts

            <ion-slides  autoplay="2000" loop="true" speed="900">
                    <ion-slide >
                    <img class="ImgTemporal" [src]="imagen" />
                    <img  class="ImgTemporal" [src]="imagen1" *ngIf="imagen1"/>
                 <img class="ImgTemporal" [src]="imagen2" *ngIf="imagen2" />
                </ion-slide>
                </ion-slides>

