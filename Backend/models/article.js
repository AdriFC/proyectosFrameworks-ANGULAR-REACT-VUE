//Clase que hace de molde para crear objectos, permite conectar a la colección de artículos en la BD

'use strict'

var mongoose = require ('mongoose'); //Cargar módulo mongoose, ORM MongoDB
var Schema = mongoose.Schema; //Utilizar el objecto de este tipo

//Definir la estructura de los objectos (Mongoose definir tipo dato)
var ArticleSchema = Schema ({  
    title: String,
    content: String,
    date: {type: Date, default: Date.now},
    image: String //Ruta de mi imagen
});

//Exportar el modelo como un módulo para poder importarlo en los archivos de backend
//y crear objectos nuevos o conectarme mediante modelo a su colección datos en BD (guardar, modificar etc)
//Importante, por cada colección datos en BD, 1 modelo
//Mongoose al guardar un documento pluraliza nombre en minus (articles)
//Guarda documentos de este tipo y estructura dentro de la colección
module.exports = mongoose.model('Article', ArticleSchema); //Nombre modelo y schema
