import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';  //Hooks

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  

  constructor() {                         //Diseñado para asignar valor a las propiedades de la clase
    this.titulo = "componente peliculas";
    console.log("Constructor lanzado!!");
  }

  ngOnInit() {
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
