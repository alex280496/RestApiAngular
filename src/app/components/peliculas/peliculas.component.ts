import { Component, OnInit,DoCheck,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo:string;
  constructor() {
                   //nose debe meter logica dentro del constructor
                  // para asignar valores a las proiedades de las clases 
    this.titulo='Componente Peliculas';
    console.log('constructor lanzado');
   }

  ngOnInit() { //aquie si se puede meter funcionalidad
    console.log('On init iniciado');
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
