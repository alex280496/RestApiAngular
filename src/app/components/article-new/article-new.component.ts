import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { Router, ActivatedRoute, Params } from '@angular/router'; //paraque funcione la redireccion
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';
@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {
  public article: Article;
  public status: string;
public page_title:string;

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
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.article = new Article('', '', '', null, null);// este objeto se va a estar modificando con el formulario
    this.page_title='Crear nuevo Articulo'
    }

  ngOnInit() {
  }
  onSubmit() {
    //console.log(this.article); //rellena el objeto con los datos del formulario
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;
          console.log(response);
          this._router.navigate(['/blog']);
        } else {
          this.status = 'error';
        }

      },
      error => {
        this.status = 'error';
      }
    );
  }
  imageUpload(imagen) { //imagen es el parametro que me llega desde la vista y es un evento con todos lod datos desde el backend
    let imagen_data = JSON.parse(imagen.response); //para obtener solo el valor del status y de la iamgen
    this.article.image = imagen_data.image;//lo que hago es subir la imagen, recoger el nobre de la imagen
    // adjuntarlo dentro del objeo del articulo en la propiedad imagen junto con los demas datos que vinene del formulario y poder guardarlo
  }

}
