import { Injectable } from '@angular/core'; //Me permite aplicar 1 decorador a la clase y cuando use el servicio no tener que crear el objecto
import { Pelicula } from '../models/pelicula'; //Importar el modelo de película

//Definir el servicio con el decorador @Injectable
@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas= [
            new Pelicula("Spiderman 4",2019, "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2013/03/213474-sam-raimi-explica-cancelacion-spiderman-4.jpg?itok=ZjuIXQVq"),
            new Pelicula("Los Goonies", 1986, "https://i2.wp.com/padresfrikis.com/wp-content/uploads/2018/10/goonies.jpg?fit=620%2C350&ssl=1"),
            new Pelicula("Solo en casa", 1990, "https://estaticos.elperiodico.com/resources/jpg/6/3/cartel-solo-casa-1545291034336.jpg"),
            new Pelicula("Solo en casa 2", 1991, "https://www.lavanguardia.com/r/GODO/LV/p0/WebSite/2018/04/23/Recortada/featuredImage-17154-macaulay-culkin-confiesa-que-no-es-capaz-de-ver-la-pelicula-solo-en-casa-992x558@LaVanguardia-Web.jpg"),
         ];
    }

    holaMundo(){
        return 'Hola mundo desde un servicio de Angular!!';
    }

    getPeliculas(){
        return this.peliculas;
        
    }
}