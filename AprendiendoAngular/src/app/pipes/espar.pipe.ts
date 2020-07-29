//Pipe personalizada para comprobar si un año es par o impar
import { Pipe, PipeTransform } from '@angular/core'; //Importar clases que necesitamos

@Pipe({
    name: 'espar'
})

export class EsParPipe implements PipeTransform{

    transform(value: any){ //Método obligatorio para la clase
        var espar = "no es par"
        if(value % 2 == 0){
            espar = "es un número par"
        }
        return "El año es: " + value + " y " + espar;

    }
}