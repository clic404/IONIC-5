//--- Ir a otra page route --/

* una vez creamos una page por generate se agrega automaticamente en el route del app

*** EJEMPLO ***


--- app.routing.module.ts ---

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina_nueva',
    loadChildren: () => import('./pagina_nueva/pagina_nueva.module').then( m => m.Pagina_nuevaPageModule)
  },
];

--- fin app.routing.module.ts ---

* Ahora desde cualquier lugar podemos llamar a la page tomaremos un titulo colocando [routerLink]="['/pagina_nueva']" que al presiona nos envie a la page

--- home.page.html ---

<p [routerLink]="['/pagina_nueva']"> Ir a la page <p>


--- fin home.page.html ---