//Clase para generar objetos de tipo película
export class Pelicula{
    /*
    public title: string;
    public year: number;
    public image: string;

    constructor(title, year,image){
        this.title = title;
        this.year = year;
        this.image = image;
    }
    */

    constructor(                //Equivale a lo anterior: define propiedad, la pasa como parámetro y asignarle valor
        public title: string,
        public year: number,
        public image: string
    ){}
}
