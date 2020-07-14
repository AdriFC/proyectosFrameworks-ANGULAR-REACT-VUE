'use strict'
/*"jshint node": true*/

//Cargar módulos de Node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');

//Ejecutar express (http)
var app = express();

//Cargar ficheros rutas
var article_routes = require('./routes/article');

//Cargar MiddLewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Activar el CORS (Permitir peticiones desde frontEnd)

//Añadir prefijos a rutas/cargar rutas
app.use('/api', article_routes);


//Exportar módulo (fichero actual)
module.exports = app;