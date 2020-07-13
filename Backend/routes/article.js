'use strict'

var express = require('express');
var ArticleControler = require('../controllers/article');

var router = express.Router();

var multipart = require ('connect-multiparty');
/*var md_upload = multipart ({ uploadDir: './upload/articles'});*/
var multer = require('multer');
var upload = multer ({dest: './upload/articles'});

//Rutas de prueba
router.post('/datos-curso', ArticleControler.datosCurso);
router.get('/test-de-controlador', ArticleControler.test);

//Rutas útiles
router.post ('/save', ArticleControler.save);
router.get ('/articles/:last?', ArticleControler.getArticles);
router.get ('/article/:id', ArticleControler.getArticle);
router.put ('/article/:id', ArticleControler.update);
router.delete ('/article/:id', ArticleControler.delete);
/*router.post ('/upload-image/:id', md_upload, ArticleControler.upload);*/
router.post ('/upload-image/:id', upload.any(), ArticleControler.upload);

module.exports = router;