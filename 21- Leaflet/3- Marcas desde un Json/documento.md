### // -- Marcas desde una consulta JSON -- //


        Agregar varias marcas de una conslta que puede ser JSON o a cualquier servidor.

        Crearemos el JSON, dentro del assets creamos el archivo data.json con este contenido.

### data.json

                        "coordenadas": [
                                {
                                "city": "Cambridge",
                                "state": "MA",
                                "long": -71.10858,
                                "lat": 42.35963
                                },
                                {
                                "city": "Cambridge",
                                "state": "MA",
                                "long": -71.10869,
                                "lat": 42.359103
                                },
                                {
                                "city": "Boston",
                                "state": "MA",
                                "long": -71.110061,
                                "lat": 42.360686
                                },
                                {
                                "city": "Cambridge",
                                "long": -71.110448,
                                "lat": 42.360642
                                }
                            ]
                        }

        Dentro del home.page.ts colocamos dentro del content la id del mapa

### Home.page.html

                        <ion-content [fullscreen]="true">
                        <div id="mapId" style="width: 100%; height: 100%"></div>
                        </ion-content>

        Preparamos el home.page.ts

### Home.page.ts

                        //Agregamos el import
                        import * as Leaflet from 'leaflet';
                        
                        //Dentro del export declaramos las variables

                        map: Leaflet.Map;
                        mapListado = [];

                        //Declaramos una funcion nativa de ionic de un solo inicio

                        ionViewDidEnter() {
                        this.map = new Leaflet.Map('mapId').setView([42.35663, -71.1109], 16);

                        Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
                         attribution: 'edupala.com'
                        }).addTo(this.map);

                        //Consulta el array de coordenadas
                        fetch('./assets/data.json')
                        .then(res => res.json())
                        .then(data => {
                                this.mapListado = data.coordenadas;
                                this.leafletMap();
                         })
                        .catch(err => console.error(err));
                        }

                        //Creamos la Funcion leafletMap

                        leafletMap() {
                        for (const coordenadas of this.mapListado) {
                        Leaflet.marker([coordenadas.lat, coordenadas.long]).addTo(this.map)
                                .bindPopup(property.city)
                                .openPopup();
                        }
                        }

                        ionViewWillLeave() {
                        this.map.remove();
                        }
                        }


    