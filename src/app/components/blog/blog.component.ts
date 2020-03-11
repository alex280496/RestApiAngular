import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers:[ArticleService]
})
export class BlogComponent implements OnInit {
  public articles:Article;
  public url:string;
  constructor(
    public _articleService:ArticleService
  ) { 
    this.url=Global.url;
  }

  ngOnInit() {
    this._articleService.getArticulos().subscribe( // subscribe sirve para recoger los datos que me devuelve la petecion http
      response=>{ // el response trae dos propiedades que son el response y el article
        //console.log(response);
        if(response.articles){ // articles es la variable del bakcend 
          this.articles=response.articles;
        }else{

        }
      },
      error =>{
        console.log(error);
      }
    );
  }

}
