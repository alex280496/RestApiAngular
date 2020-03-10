import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public user:any; 
  public campo:string;
  constructor() { 
    this.user={ // defino todos los campos del formulario, es un objeto que el formulario va a estar modificando
      nombre:'',
      apellidos:'',
      bio:'',
      genero:'',
    };
  }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.user);
  }
  hasdadoclick(){
    alert('has dado click');
  }
  hassalido(){
    alert('has pulsado enetr');
  }

}
