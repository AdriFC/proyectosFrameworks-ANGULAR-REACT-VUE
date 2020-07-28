import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; //Cargar componentes del router para recoger parámetro que llega por url

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre: string;
  public apellidos: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params) =>{     //Recoger parámetros de la url
      this.nombre = params.nombre;
      this.apellidos = params.apellidos;
    });

  }

  redireccion(){
    this._router.navigate(['/pagina-de-pruebas', 'Adrián', 'Fraga Cortés']);
  }

}
