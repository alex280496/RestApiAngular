import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing,appRoutingProviders} from './app.routing'; // son las dos constantes del archivo de rutas
//routing dse debe cargar como modulo en la parte de imports
//appRoutingProviders se debe caragr con servicio (providers)
import {FormsModule} from '@angular/forms'; // para que funcionen los formularios en angular
import {HttpClientModule} from '@angular/common/http'; // para que funcionen las peticiones ajax en angualr
import {MomentModule} from 'angular2-moment';

import { AppComponent } from './app.component';
import {MiComponente} from './components/mi-componente/mi-componente.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import {EsParPipe} from './pipes/espar.pipe';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PeliculasComponent,
    PruebasComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    ErrorComponent,
    PeliculaComponent,
    EsParPipe,
    ArticlesComponent,
    ArticleComponent,
    SearchComponent,
    ArticleNewComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule, //los imports son los modulos que cargamos en angular hay que cargarlos para que
              //funcionen globalmente
    HttpClientModule,
    AngularFileUploaderModule,
    MomentModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
