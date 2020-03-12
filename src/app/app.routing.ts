// importar los modulos del router de angular
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// importar los componentes a los cuales les  quiero hacer una pagina exclusiva

import {HomeComponent} from './components/home/home.component';
import {BlogComponent} from './components/blog/blog.component';
import {FormularioComponent} from './components/formulario/formulario.component';
import {PeliculasComponent} from './components/peliculas/peliculas.component';
import {PaginaComponent} from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import {ArticleComponent} from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
// Array de rutas es la configuracion de todas las rutas que quiero crear
const appRoutes: Routes= [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'blog',component:BlogComponent},
    {path:'blog/articulo/:id',component:ArticleComponent},
    {path:'buscar/:search',component:SearchComponent},
    {path:'blog/crear',component:ArticleNewComponent},
    {path:'blog/editar/:id',component:ArticleEditComponent},
    {path:'formulario',component:FormularioComponent},
    {path:'peliculas',component:PeliculasComponent},
    {path:'pagina-de-pruebas',component:PaginaComponent}, //se crea otra ruta igual para que el parametro sea opcional
    {path:'pagina-de-pruebas/:nombre/:apellidos',component:PaginaComponent}, // paara pasar parametros /:nombre
    // hay que psar los dos parametros obligatoriamente, no puedo pasar solo uno
    {path:'**',component:ErrorComponent}// esta ruta se debe poner al final de todas para que funcionen todas
];

//exportar el modulo de rutas para poder utilizar em toda la aplicaion en general

export const appRoutingProviders:any[]=[]; //es un array de tipo any que esta vacio
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes); // es un modulo que sirve para cargar todas las rutas para que funcionen dentro de angular
 
//para que  funcione hay que cargarle dentro del app module