import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';
import {Router, ActivatedRoute, Params} from '@angular/router'; //para poder coger el dato que me llega por parametro
import {Global } from '../../services/global';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers:[ArticleService]
})
export class ArticleComponent implements OnInit {
  public article:Article;
  public url:string;
  constructor(
   private _articleService:ArticleService,
   private _route:ActivatedRoute,
   private _router:Router
  ) { 
    this.url=Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params=>{
      let id =params['id'];// el id viene de la vista articles.component.html, es el dato que llega por la url y le mando al servicio
      this._articleService.getArticle(id).subscribe(
        response=>{
            if(response.article){
              this.article=response.article;
              console.log(this.article)
            }else{
              this._router.navigate(['/home']); // para hacer una redireccion
            }
        },
        error=>{
            console.log(error);
            this._router.navigate(['/home']);
        }
      );   //llamo al servicio
    });
  }

}
