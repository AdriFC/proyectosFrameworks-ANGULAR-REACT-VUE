import { Component } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
    selector: 'mi-componente',  // nombre de la etiqueta
    templateUrl: './mi-componente.component.html' //Enlace a la vista (separar html de js)
})

export class MiComponente{

    public titulo: string;
    public comentario:string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){
        this.titulo = "Soy mi componente";
        this.comentario = "Este es mi primer componente";
        this.year = 2020;
        this.mostrarPeliculas = true;

        console.log("Componente mi-componente cargado!!");
        console.log(this.titulo, this.comentario, this.year);
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
    
}

