import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[ArticleService]
})
export class SearchComponent implements OnInit {
  public articles:Article[];
  public search:string;
  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _articleService:ArticleService
  ) { }

  ngOnInit() {
    //necestio coger el parametro que me llega por la url y pasarla al servicio para que haga la 
    //petecion al backend
    this._route.params.subscribe(params=>{
      var search=params['search']; //search es el nombre del parametro que tengo definido en la ruta
      this.search=search;
      this._articleService.search(search).subscribe(
        response=>{
          if(response.articles){
            this.articles=response.articles;
            console.log(this.articles);
          }else{
            this.articles=[];
          }
        },
        error=>{
          console.log(error);
          this.articles=[]; //le asigno un array vacio para que ya no se quede cargando en la vista
          //this._router.navigate(['/home']);
        }
      );
    });
  }

}
