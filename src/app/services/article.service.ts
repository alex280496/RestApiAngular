import { Injectable } from '@angular/core'; //injectable para puder usar el serviio fuera de esta clase
import { HttpClient, HttpHeaders } from '@angular/common/http';//para hacer peticiones ajax al backend
import { Observable } from 'rxjs';//observable para recoger los datos que nos devuelve le api
import { Article } from '../models/article';
import { Global } from './global';
@Injectable()
export class ArticleService {

  public url: string;
  constructor(
    private _http: HttpClient //_http para hacer peteciones ajax y hay que cargar en el app  module
  ) {
    this.url = Global.url; //accedo a la propiedad  url
  }
  pruebas() {
    console.log('hola desde el servicio de articulos');
  }

  getArticulos(last: any = null): Observable<any> { //Observable es el tipo de dato que va a devolver
    var articles = 'articles';
    if (last != null) { //last es un parametro opcional
      articles = 'articles/ultimos';
    }
    return this._http.get(this.url + articles); //_http para acceder al servicio de angualr y hacer las peteciones
  }
  getArticle(articleId): Observable<any> { //devulve solo 5 articulos,el articleId me llega por paramtro desde el componente
    return this._http.get(this.url + 'article/' + articleId); // hace la peticion al backend
  }
  search(searchString): Observable<any> {
    return this._http.get(this.url + 'search/' + searchString); // este metodo lo llamo desde el component
  }

  //el backend va a recibir datos en formato json
  create(article): Observable<any> { //le paso el objeto lleno con los datos del formulario
    let params = JSON.stringify(article); //convertir el objeto de javascript en un json string
    let headers = new HttpHeaders().set('Content-Type', 'application/json');//headers: para configurar la cabecera el content type
    return this._http.post(this.url + 'save', params, { headers: headers });
    // le envio params que es el objeto articulo y la cabecera que es headers
  }

  update(id,article):Observable<any>{
    let params=JSON.stringify(article);
    let headers=new HttpHeaders().set('Content-Type','application/json');

    return this._http.put(this.url+ 'article/'+ id,params,{headers:headers});
  }
  delete(id):Observable<any>{
    let headers=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'article/'+id,{headers:headers});
  }

}