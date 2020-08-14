import React, {Component} from 'react';

class MiComponente extends Component{

    //Método que muestra la información por pantalla (obligatorio)
    render(){
        let receta = {
            nombre:'Pizza',
            ingredientes: ['Tomate', 'Queso','Jamón'],
            calorias: 400
        };
        //JSX solo puede devolver por return una etiqueta, para más, meterlas dentro de una general
        return (
            <div className="mi-componente">
                <h1>{'Receta: ' + receta.nombre}</h1>
                <h2>{'Calorías: ' + receta.calorias}</h2>

                {this.props.saludo &&
                    <h3>{this.props.saludo}</h3>
                }
                
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            console.log(ingrediente);
                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            );
                        })
                    }
                </ol>
                <hr/>
            </div>
        );
    }
}
 

//Exportar componente
export default MiComponente;