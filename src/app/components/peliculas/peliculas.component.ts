import { Component, OnInit,DoCheck,OnDestroy } from '@angular/core';
import {Pelicula} from '../../models/pelicula';
import {PeliculaService} from '../../services/pelicula.service'; // para poder utilizar el servico de peliculas dentro del componente

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers:[PeliculaService]// para utilizar el servicio
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo:string;
  public peliculas:Pelicula[]; // la variable pelicula puedo utilizaral en la vista
  public favorita:Pelicula;
  public fecha: any;
  constructor(
    private _peliculaService:PeliculaService
  ) {
                   //nose debe meter logica dentro del constructor
                  // para asignar valores a las proiedades de las clases 
    this.titulo='Componente Peliculas';
    //console.log('constructor lanzado');
    this.peliculas=this._peliculaService.getPeliculas();
    this.fecha=new Date(2020,3,26); //para crear fechas en javascript
   }


  ngOnInit() { //aquie si se puede meter funcionalidad
    console.log('On init iniciado');
    console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());
  }
  ngDoCheck(){ //docheck se ejecuta cuando se genera un cambio en el componente
    console.log('Docheck lanzado');
  }
  cambiarTitulo(){
    this.titulo='El titulo ha sido cambiado';
  }
  ngOnDestroy(){ // se ejcuta cuando un componente se va a eliminar del dom de la pagina html
    console.log('el componente se va a eliminar');
  }

  mostrarfavorita(event){
    this.favorita=event.pelicula;//son los valores que nos llegan desde el componete hijo
  }

}
