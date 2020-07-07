'use strict'

//Cargar módulos de Node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');

//Ejecutar express (http)
var app = express();

//Cargar ficheros rutas

//Cargar MiddLewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Activar el CORS (Permitir peticiones desde frontEnd)

//Añadir prefijos a rutas

//Ruta o método de prueba para el API REST
app.get('/probando', (req, res) =>{
    return res.status(200).send({
        curso: 'Master en frameworks JS',
        autor: 'Victor Robles'
    });
});

//Exportar módulo (fichero actual)
module.exports = app;