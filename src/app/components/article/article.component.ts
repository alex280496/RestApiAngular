import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Router, ActivatedRoute, Params } from '@angular/router'; //para poder coger el dato que me llega por parametro
import { Global } from '../../services/global';
import swal from 'sweetalert'
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  public article: Article;
  public url: string;
  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];// el id viene de la vista articles.component.html, es el dato que llega por la url y le mando al servicio
      this._articleService.getArticle(id).subscribe(
        response => {
          if (response.article) {
            this.article = response.article;
            console.log(this.article)
          } else {
            this._router.navigate(['/home']); // para hacer una redireccion
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );   //llamo al servicio
    });
  }
  delete(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: [true,true], //para eliminar el erroe qeu sale en la consola por sweet alert
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this._articleService.delete(id).subscribe(
          response => {
            swal("El articulo ha sido eliminado", {
              icon: "success",
            });
            this._router.navigate(['/blog']);
          },
          error => {
            console.log(error);
            this._router.navigate(['/blog']);
          }
        );
        
      } else {
        swal("No se ha eliminado ningun articulo!");
      }
    });
    
  }

}
