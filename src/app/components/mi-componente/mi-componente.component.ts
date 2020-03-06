import {Component} from '@angular/core';

@Component({ // el @componnet es un decorador donde se establecen los atributos como selector y template
    selector:'mi-componente',
    // binding por interpolacion para poder mostrar los datos con las llaves{}
    templateUrl:'mi-componente.component.html'
})
export class MiComponente{
    // declarar atributos con su tipo
    public titulo:string;
    public comentario:string;
    public year: number;
    public mostrarpeliculas:boolean;

    constructor(){
        this.titulo="Hola mundo"; //asignando valores a los atributos
        this.comentario="creacion del primer componente";
        this.year=2020;
        this.mostrarpeliculas=true;
        console.log('componente cargado correctamente'); // se muestra cuando se carga en componente
        console.log(this.titulo,this.comentario,this.year);
    }
    ocultarpeliculas(){
        this.mostrarpeliculas=false;
    }
}