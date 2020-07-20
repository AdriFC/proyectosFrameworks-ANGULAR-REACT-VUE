//Fichero  para crear el servidor web

'use strict' //Mejores prácticas de desarrollo con JS

//Cargar módulos de Node para crear el servidor
var express = require('express'); //Permitir trabajo con HTTP
var bodyParser = require('body-parser'); //Recibir peticiones y convertir datos a JSON

//Ejecutar express (trabajar http)
var app = express();

//Cargar ficheros de rutas
var article_routes = require('./routes/article');

//Cargar MiddLewares (algo que se ejecuta antes de cargar una ruta o url)
app.use(bodyParser.urlencoded({extended:false})); //MW que trae el body-parser (utilizar el body-parser)
app.use(bodyParser.json()); //Convertir peticiones a JSON (objecto JS)

//Cargar el CORS (Permite peticiones desde frontEnd)

//Añadir prefijos a rutas / Cargar rutas
app.use('/api',article_routes);

//Exportar módulo (fichero actual), poder cargar app.js en index
//Servidor pueda escuchar
module.exports = app;