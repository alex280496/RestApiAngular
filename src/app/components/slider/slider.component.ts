import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() nombre:string; // el nombre de la varianle debe ser igual al del componente padre
  @Input() size:string; // para size el componente padre es el blog
  constructor() { }

  ngOnInit() {
  }

}
