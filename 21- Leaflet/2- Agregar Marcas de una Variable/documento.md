### Agregar Marcas ante una consulta

    Traeremos con una consulta los valores de coordenadas y lo pasaremos a una variable.

    Supongamos que tenemos una funcion que nos trae un arreglo con coordenadas por lo que en el resposeData

### Ejemplo 

            .... this.resposeData = res;
            // Creo la variable para enviar la coordenadas a la funcion.
            var coordenadas = this.resposeData.Coordenadas;
            
            // Paso las variables del arreglo a la funcion
            this.leafletMap(coordenadas); ....

    En la funcion leafletMap le enviamos la coordenadas y incorporamos un forEach.

    Debemos tener como en el capitulo 1- Incorporar Leaflet listo

### Ejemplo Funcion leafletMap

            // Pasamos la variable coordenadas
            leafletMap(coordenadas) {
            this.map = new Leaflet.Map('mapId').setView([12.972442, 77.594563], 13);

            Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
            attribution: 'edupala.com'
            }).addTo(this.map);

            // Creamos el forEach pasando la variable de lat y lng
            coordenadas.forEach((variable) => {
            const markPoint = Leaflet.marker([variable.lat, variable.lng]);
            markPoint.bindPopup('<p>Tashi Delek - Bangalore.</p>');
            this.map.addLayer(markPoint);
            });
            }

    Listo pasamos todas las coordenadas a nuestro mapa

        