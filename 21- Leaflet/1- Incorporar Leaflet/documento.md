### // -- Agregar Leaflet en Ionic 5 -- //

    Incorporaremos leaflet de openstreetmap en nuestro proyecto.

    Instalaremos los plugins leaflet


            npm install leaflet --save
            npm install @types/leaflet --save
    
    Dentro del src/global.scss ingresamos el import como parte del estilo al final

### Global.scss

            @import "~leaflet/dist/leaflet.css"
    
    Dentro del home.page.html colocaremos en el content la id del map

### Home.page.ts


            <ion-content>
            <div id="mapId" style="width: 100%; height: 100%">
            </div>
            </ion-content>

    Pasaremos a declarar las funciones y import en el home.page.ts

### Home.page.ts

            // Declaramos el import
            import * as Leaflet from 'leaflet';

            // Declaramos la variable dentro del export
            map: Leaflet.Map;

            // Llamamos a la funcion una sola vez
            ionViewDidEnter() { this.leafletMap(); }

            // Creamos la funcion leafletMap
            leafletMap() {
            this.map = new Leaflet.Map('mapId').setView([12.972442, 77.594563], 13);

            Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
            attribution: 'edupala.com'
            }).addTo(this.map);

            const markPoint = Leaflet.marker([12.972442, 77.594563]);
            markPoint.bindPopup('<p>Tashi Delek - Bangalore.</p>');
            this.map.addLayer(markPoint);
            }

    



