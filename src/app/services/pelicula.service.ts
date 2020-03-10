import {Injectable} from '@angular/core'; //injectable para poder usarlo desde cualquier componente
import {Pelicula} from '../models/pelicula';

@Injectable()

export class PeliculaService{
    public peliculas:Pelicula[];
    constructor(){
        this.peliculas=[
            new Pelicula("Camino hacia el terror",2020,"https://pelisplus.me/cover/movie/camino-hacia-el-terror.png"),
            new Pelicula("Mister Bean",2017,"https://es.web.img3.acsta.net/r_1280_720/pictures/15/11/05/10/15/561033.png"),
            new Pelicula("Dragon Ball",2019,"https://media.metrolatam.com/2019/06/06/1501972698dragon-e1caecd2afcb1e6afd0a7c6881c49428-600x400.jpg"),
          // estamos utilizano la clase pelicula para utilizar un objeto de ese tipo
          ];
    }
    holaMundo(){
     return 'Hola mundo desde el servicio de angular';
    }
    getPeliculas(){
        return  this.peliculas;
    }
}