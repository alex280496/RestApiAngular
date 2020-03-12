import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';
import {Global} from '../../services/global';
import swal from 'sweetalert';
@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers:[ArticleService]
})
export class ArticleEditComponent implements OnInit {
  public article:Article;
  public status:string;
  public isedit:boolean;
  public page_title:string;
  public url:string;
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50",
    uploadAPI: {
      url: Global.url + 'uploadimage/',
      //no han falta los headers porque el content type es format data
    },
    theme: "attachPin", // es el formulario mas clasico
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube la imagen para el articulo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };
  constructor(
    private _articleService:ArticleService,
    private _route:ActivatedRoute,
    private _router:Router
  ) {
    this.article = new Article('', '', '', null, null);
    this.isedit=true;
    this.page_title='Editar Articulo';
    this.url=Global.url;
   }

  ngOnInit() {
    this.getArticle(); //para llenar y formulario y editar los datos
  }
  onSubmit() {
    //console.log(this.article); //rellena el objeto con los datos del formulario
    this._articleService.update(this.article._id,this.article).subscribe( 
      // le paso los dos parametros (id, los datos del articulo al servicio ) para que actualice en el backend
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;
          console.log(response);
          swal(
            'Articulo editado',
            'El articulo se ha editado correctamente',
            'success'
          );
          this._router.navigate(['/blog/articulo',this.article._id]); // para redirigir ala visat de elimianr y editar articulo
        } else {
          this.status = 'error';
        }

      },
      error => {
        this.status = 'error';
        swal(
          'Edicion fallida',
          'El articulo no se ha editado',
          'error'
        );
      }
    );
  }
  imageUpload(imagen) {  //imageUpload es un metodo configuatado mediante file uploader de angular
    //imagen es el parametro que me llega desde la vista y es un evento con todos lod datos desde el backend
    let imagen_data = JSON.parse(imagen.response); //para obtener solo el valor del status y de la iamgen
    this.article.image = imagen_data.image;//lo que hago es subir la imagen, recoger el nobre de la imagen
    // adjuntarlo dentro del objeo del articulo en la propiedad imagen junto con los demas datos que vinene del formulario y poder guardarlo
  }
  getArticle(){ // es para obtener un solo articulo desde la base de datos y llenar el formualrio y ediatr los datos
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
