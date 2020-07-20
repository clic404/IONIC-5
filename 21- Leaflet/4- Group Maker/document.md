### // -- Agrupar Marcas markercluster -- //


    Instalamos el plugin leaflet.markercluster

            npm install leaflet.markercluster
    
    Instalamos el @types

            npm install @types/leaflet.markercluster
    
    Dentro del home.page.ts configuramos las librerias y componentes

### home.page.ts

            //Importamos la Libreria
            import 'leaflet.markercluster';

            // Dentro del export declaramos la variable cluster
            cluster;

            // En el constructor le pasamos la libreria al cluster al iniciar mapa por default
            this.cluster = L.markerClusterGroup();

            //Dentro de la funcion leafletMap procedemos a realizar algunos cambios

    Trabajaremos dentro de la funcion leafletMap

    Tenemos L.marker quien traer del for el arreglo de coordenadas lo que tenemos que declararle una variable antes.

### Ejemplo funcion leafletMap

            // Dentro del for

            //ANTES

            L.marker([property.lat, property.lng], {icon: Marcas})
            .bindPopup(popupLink)

            //DESPUES
            var marker =   L.marker([property.lat, property.lng], {icon: Marcas})
            .bindPopup(popupLink)

            // Agregamos dentro del for debajo de la variable marker

            this.cluster.addLayer(marker);

            this.map.addLayer(this.cluster);

            //Fuera del for le pasamos la variable markerclustergroup al cluster para que no acumule grupos

             this.cluster = L.markerClusterGroup();

    Para que se apliquen los colores y detalles debemos agregar en el scss global siendo la variables.scss la siguientes lineas

### variables.scss

            #map {
                height: 100%;
            }
            .button-action{
                height: 30px;
                width: 30px;
                //color: map-get(#ffff);
                background: url("https://t1.gstatic.com/images?q=tbn:ANd9GcR6FCUMW5bPn8C4PbKak2BJQQsmC-K9-mbYBeFZm1ZM2w2GRy40Ew");
                background-size: 30px 30px;
                padding-top: 6px;
            }
  
            .button-action:hover{
                background: url('https://i.hizliresim.com/a1zraR.png') no-repeat;
            }
            .map-container {
                position: absolute;
                top: 0px;
                bottom: 0px;
                width: 100%;
                height: 100%;
            }
            .leaflet-control-attribution{
                display: none;
            }
            .leaflet-cluster-anim {
                .leaflet-marker-icon, .leaflet-marker-shadow {
                -webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s ease-in;
                -moz-transition: -moz-transform 0.3s ease-out, opacity 0.3s ease-in;
                -o-transition: -o-transform 0.3s ease-out, opacity 0.3s ease-in;
                transition: transform 0.3s ease-out, opacity 0.3s ease-in;
                }
            }
  
            .leaflet-cluster-spider-leg {
                -webkit-transition: -webkit-stroke-dashoffset 0.3s ease-out, -webkit-stroke-opacity 0.3s ease-in;
                -moz-transition: -moz-stroke-dashoffset 0.3s ease-out, -moz-stroke-opacity 0.3s ease-in;
                -o-transition: -o-stroke-dashoffset 0.3s ease-out, -o-stroke-opacity 0.3s ease-in;
                transition: stroke-dashoffset 0.3s ease-out, stroke-opacity 0.3s ease-in;
            }
            .marker-cluster-small {
                background-color: rgba(181, 226, 140, 0.6);
                div {
                background-color: rgba(110, 204, 57, 0.6);
                }
            }
  
            .marker-cluster-medium {
                background-color: rgba(241, 211, 87, 0.6);
                div {
                background-color: rgba(240, 194, 12, 0.6);
                }
            }
  
            .marker-cluster-large {
                background-color: rgba(253, 156, 115, 0.6);
                div {
                background-color: rgba(241, 128, 23, 0.6);
                }
            }
  
            .leaflet-oldie {
                .marker-cluster-small {
                background-color: rgb(181, 226, 140);
                div {
                    background-color: rgb(110, 204, 57);
                }
                }
                .marker-cluster-medium {
                background-color: rgb(241, 211, 87);
                div {
                    background-color: rgb(240, 194, 12);
                }
                }
                .marker-cluster-large {
                background-color: rgb(253, 156, 115);
                    div {
                    background-color: rgb(241, 128, 23);
                }
                }
            }
  
            .marker-cluster {
                background-clip: padding-box;
                border-radius: 20px;
                div {
                width: 30px;
                height: 30px;
                margin-left: 5px;
                margin-top: 5px;
                text-align: center;
                border-radius: 15px;
                font: 1rem "Helvetica Neue", Arial, Helvetica, sans-serif;
                }
                span {
                line-height: 30px;
                }
            }


  





