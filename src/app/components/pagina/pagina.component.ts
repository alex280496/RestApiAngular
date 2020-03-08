import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
//importacion necesaria para recoger paramentros de la url
@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
   public nombre:string;
   public apellidos:string;

  constructor(
    private _route:ActivatedRoute, //sirve para sacar los parametros de las url
    private _router:Router //sirve para hacer redirecciones a otras paginas
  ) { }

  ngOnInit() { // es el primer metodo que se ejecuta despues del constructor

    //recoger los parametros de la url
    // (subscribe observable) se utliza un observable  y este espera una respuesta de un servicio, 
    this._route.params.subscribe((params:Params)=>{
      //console.log(params);
      this.nombre=params.nombre;
      this.apellidos=params.apellidos;
    });

  }
  redireccion(){
   //this._router.navigate(['/formulario']) // navigate, para hacer la redireccion a otra pagina directamente con la ruta
    this._router.navigate(['/pagina-de-pruebas','Alex','Reyes Negret']);
    // tambien se pueden pasar los parametros mediante la redireccion con navigate
  }

}
