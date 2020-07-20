//Archivo para crear las rutas

'use strict'

var express = require ('express'); //Cargar el módulo de express
var ArticleController = require ('../controllers/article'); //Cargar el controlador ya creado
var router = express.Router(); //Llamar al router de express para crear rutas

//Rutas de prueba
router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-de-controlador', ArticleController.test);

//Rutas útiles
router.post('/save', ArticleController.save);
router.get('/articles/:last?', ArticleController.getArticles); //:last? parámetro opcional
router.get('/article/:id', ArticleController.getArticle);
//Exportar módulo para poder usarlo en app.js
module.exports = router;