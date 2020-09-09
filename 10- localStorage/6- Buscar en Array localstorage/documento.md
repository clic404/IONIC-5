### Buscar Array en el localstorage

    Dentro de la funcion traer cooordenadas una vez traer latitud y longitud

### Ejemplo 

             // Crear la variable marker y recibe las coordenadas
             var marker = L.marker([property.lat, property.lng], {icon: Marcas, title: property.id});
             // Paso los parametros en e a la funcion abrirDetalle
             marker.on('click', (e) => { this.abrirDetalle(e) });

    Creamos la funcion abrir Detalle

### Ejemplo 

            abrirDetalle(e){

            //Creo la variable marker que trae los parametros 
            var marker = e.target;
            // Creo la variable y le paso el valor de option id
            var id = marker.options.title;


            // creo la constante la cual voy a utilizar para mostrar solo el item
            const items = localStorage.getItem('marcas');
            // Toma si existe como boolean
            let itemExists = false

            if (items) {
            const itemsData = JSON.parse(items)
            // Verifica si existe el valor
            itemExists =  itemsData.find(item => item.id === id)
            }

            // Guardar el array en el localstorage
            localStorage.setItem('item', JSON.stringify(itemExists) );

  
            //Guarda la Page a utilizar
            localStorage.setItem('page', 'mapa');

            this.router.navigate(["/detalle"], { skipLocationChange: true });

            this.closeModal();

            }

