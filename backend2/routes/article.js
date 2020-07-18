//Archivo para crear las rutas

'use strict'

var express = require ('express'); //Cargar el módulo de express
var ArticleController = require ('../controllers/article'); //Cargar el controlador ya creado
var router = express.Router(); //Llamar al router de express para crear rutas

//Rutas
router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-de-controlador', ArticleController.test);

//Exportar módulo para poder usarlo en app.js
module.exports = router;