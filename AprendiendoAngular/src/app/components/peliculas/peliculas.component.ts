import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';  //Hooks
import { Pelicula } from '../../models/pelicula'
import { PeliculaService } from '../../services/pelicula.service'; //Importar el servicio de película


@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]

})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Pelicula [];
  public favorita: Pelicula;
  public fecha: any;

  constructor(                    //Diseñado para asignar valor a las propiedades de la clase
    private _peliculaService: PeliculaService
  ) {                         
    this.titulo = "componente peliculas";
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2020,8,12);
  }

  ngOnInit() {
    console.log(this.peliculas);
    console.log("Componente iniciado");
    console.log(this._peliculaService.holaMundo());
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

  mostrarFavorita(event){
    this.favorita=event.pelicula;
  }

}
