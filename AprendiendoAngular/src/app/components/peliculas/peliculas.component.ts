import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';  //Hooks
import { Pelicula } from '../../models/pelicula'


@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Pelicula [];

  constructor() {                         //Diseñado para asignar valor a las propiedades de la clase
    this.titulo = "componente peliculas";
    this.peliculas = [
      new Pelicula("Spiderman 4",2019, "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2013/03/213474-sam-raimi-explica-cancelacion-spiderman-4.jpg?itok=ZjuIXQVq"),
      new Pelicula("Los Goonies", 1986, "https://i2.wp.com/padresfrikis.com/wp-content/uploads/2018/10/goonies.jpg?fit=620%2C350&ssl=1"),
      new Pelicula("Solo en casa", 1990, "https://estaticos.elperiodico.com/resources/jpg/6/3/cartel-solo-casa-1545291034336.jpg"),
      new Pelicula("Solo en casa 2", 1991, "https://www.lavanguardia.com/r/GODO/LV/p0/WebSite/2018/04/23/Recortada/featuredImage-17154-macaulay-culkin-confiesa-que-no-es-capaz-de-ver-la-pelicula-solo-en-casa-992x558@LaVanguardia-Web.jpg"),
      
    ];
  }

  ngOnInit() {
    console.log(this.peliculas);
    console.log("Componente iniciado");
  }

  ngDoCheck() {                         //Se ejecuta cada vez que se produzca algún tipo de cambio
    console.log("DoCheck lanzado");
  }

  cambiarTitulo() {
    this.titulo = "El título ha sido cambiado";
  }

  ngOnDestroy(){
    console.log("El componente se va a eliminar");
  }

}
