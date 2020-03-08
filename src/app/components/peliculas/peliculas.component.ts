import { Component, OnInit,DoCheck,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo:string;
  public peliculas:Array<any>; // la variable pelicula puedo utilizaral en la vista
  constructor() {
                   //nose debe meter logica dentro del constructor
                  // para asignar valores a las proiedades de las clases 
    this.titulo='Componente Peliculas';
    //console.log('constructor lanzado');
    this.peliculas=[
      {year:2020,titulo:"Camino hacia el terror",image:"https://pelisplus.me/cover/movie/camino-hacia-el-terror.png"}, // se pone , porque es un array
      {year:2017,titulo:"Mister Bean", image:"https://es.web.img3.acsta.net/r_1280_720/pictures/15/11/05/10/15/561033.png"},
      {year:2019,titulo:"Dragon Ball",image:"https://media.metrolatam.com/2019/06/06/1501972698dragon-e1caecd2afcb1e6afd0a7c6881c49428-600x400.jpg"},
      {year:2015,titulo:"Rampage",image:"https://www.beon.com/wp-content/uploads/2018/08/Rampage.png"}
    ];
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

}
