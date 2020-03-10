  import {Injectable} from '@angular/core'; //injectable para puder usar el serviio fuera de esta clase
  import {HttpClient, HttpHeaders} from '@angular/common/http';//para hacer peticiones ajax al backend
  import {Observable} from 'rxjs';//observable para recoger los datos que nos devuelve le api
  import {Article} from '../models/article';
  import {Global} from './global';
  @Injectable()
  export class ArticleService{

    public url:string;
      constructor(
          private _http: HttpClient
      ){
        this.url=Global.url; //accedo a la propiedad  url
      }
      pruebas(){
          console.log('hola desde el servicio de articulos');
      }
      getArticulos():Observable<any>{
        return this._http.get(this.url+'articles');
      }
  }