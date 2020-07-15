//Fichero  para crear el servidor web

'use strict' //Mejores prácticas de desarrollo con JS

//Cargar módulos de Node para crear el servidor
var express = require('express'); //Permitir trabajo con HTTP
var bodyParser = require('body-parser'); //Recibir peticiones y convertir datos a JSON

//Ejecutar express (trabajar http)
var app = express();

//Cargar ficheros de rutas

//Cargar MiddLewares (algo que se ejecuta antes de cargar una ruta o url)
app.use(bodyParser.urlencoded({extended:false})); //MW que trae el body-parser (utilizar el body-parser)
app.use(bodyParser.json()); //Convertir peticiones a JSON (objecto JS)

//Cargar el CORS (Permite peticiones desde frontEnd)

//Añadir prefijos a rutas

//Ruta o método de prueba para el API REST
app.get('/probando2'/*ruta*/, (req/*recibo*/ , res/*devuelvo*/)=>{
    return res.status(200).send({
        curso: 'Master en frameworks JS',
        autor: 'Víctor Robles'

    });
        
    
});

//Exportar módulo (fichero actual), poder cargar app.js en index
//Servidor pueda escuchar
module.exports = app;