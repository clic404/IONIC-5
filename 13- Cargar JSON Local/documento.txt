//-- Cargar Json Local con valores --//

* Creamos un archivo ejemplo paises.json con los siguientes valores

--- paises.json ---
{
"paises": [  
		{"codigo": "858", "movil": "0598", "iso": "UY", "iso3": "URY", "nombre": "Uruguay", "nombreFormal": "República Oriental do Uruguay"},
		{"codigo": "032", "movil": "0054", "iso": "AR", "iso3": "ARG", "nombre": "Argentina", "nombreFormal": "República Argentina"},
		{"codigo": "076", "movil": "0055", "iso": "BR", "iso3": "BRA", "nombre": "Brasil", "nombreFormal": "República Federativa do Brasil"}
]
}

-- fin  paises.json ---

* Una vez cargados los valores guardamos el archivo dentro del proyecto...

*** Ejemplo ***

src/
src/assets/
src/assets/json/
src/assets/json/paises.json

*** fIn Ejemplo ***

* Aprovechamos el complemento nativo ngOnInit() para la carga y con un fetch traemos los valores

--- home.page.ts ---

ngOnInit() {

    // Busco y consulto y el json
    fetch('./system/paises.json').then(res => res.json())
    .then(json => {
    // Debemos declarar this.paises despues del export como paises: any
      this.paises = json.paises;
    // Muestra los valores recuperados del Json
      console.log(this.paises);
    });
  }

--- home.page.ts ---
