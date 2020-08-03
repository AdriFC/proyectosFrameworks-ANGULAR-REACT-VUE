import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';                               //Para recoger los datos que devuelve el API
import { Article } from '../models/article';
import { Global } from './global';

//Definir la clase con el decorador @injectable
@Injectable()
export class ArticleService {

    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    pruebas(){
        return"Soy el servicio de artículos!";
    }

    getArticles(last:any = null):Observable<any>{

        var articles = 'articles';

        if(last != null){
            var articles = 'articles/true';
        }

        return this._http.get(this.url+articles);
    }

    getArticle(articleId):Observable<any>{
        return this._http.get(this.url+'article/'+articleId);
    }

    search(searchString):Observable<any>{
        return this._http.get(this.url+'search/'+searchString);
    }

}