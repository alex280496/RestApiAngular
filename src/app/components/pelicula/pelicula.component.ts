import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Pelicula} from '../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
 @Input() pelicula:Pelicula;
 @Output() MarcarFavorita=new EventEmitter(); //elevento se llama maracr favorita
  constructor() { }

  ngOnInit() {
  }
  seleccionar(event,pelicula){
    this.MarcarFavorita.emit({ // este evento es para pasar los datos al componente padre mediante output
      pelicula:pelicula
    }); //necesito pasar al componente padre
  }

}
