import { Component, OnInit,DoCheck,OnDestroy } from '@angular/core';
import {Pelicula} from '../../models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo:string;
  public peliculas:Pelicula[]; // la variable pelicula puedo utilizaral en la vista
  public favorita:Pelicula;
  public fecha: any;
  constructor() {
                   //nose debe meter logica dentro del constructor
                  // para asignar valores a las proiedades de las clases 
    this.titulo='Componente Peliculas';
    //console.log('constructor lanzado');
    this.peliculas=[
      new Pelicula("Camino hacia el terror",2020,"https://pelisplus.me/cover/movie/camino-hacia-el-terror.png"),
      new Pelicula("Mister Bean",2017,"https://es.web.img3.acsta.net/r_1280_720/pictures/15/11/05/10/15/561033.png"),
      new Pelicula("Dragon Ball",2019,"https://media.metrolatam.com/2019/06/06/1501972698dragon-e1caecd2afcb1e6afd0a7c6881c49428-600x400.jpg"),
    // estamos utilizano la clase pelicula para utilizar un objeto de ese tipo
    ];
    this.fecha=new Date(2020,3,26); //para crear fechas en javascript
   }


  ngOnInit() { //aquie si se puede meter funcionalidad
    console.log('On init iniciado');
    console.log(this.peliculas);
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
