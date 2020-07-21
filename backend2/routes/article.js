//Archivo para crear las rutas

'use strict'

var express = require ('express'); //Cargar el módulo de express
var ArticleController = require ('../controllers/article'); //Cargar el controlador ya creado
var router = express.Router(); //Llamar al router de express para crear rutas
//var multipart = require ('connect-multiparty') //Cargar módulo multiparty (uploads)
//var md_upload = multipart ({uploadDir: './upload/articles'}); //connect devuelve 1 MiddLeware

var crypto = require('crypto')

var multer = require('multer');

const storage = multer.diskStorage({

  destination(req, file, cb) {

    cb(null, './uploads/albums');

  },

  filename(req, file = {}, cb) {

    const { originalname } = file;

   

    const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];

    // cb(null, `${file.fieldname}__${Date.now()}${fileExtension}`);

    crypto.pseudoRandomBytes(16, function (err, raw) {

      cb(null, raw.toString('hex') + Date.now() + fileExtension);

    });

  },

});

var mul_upload = multer({dest: './uploads/albums',storage});

//Rutas de prueba
router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-de-controlador', ArticleController.test);

//Rutas útiles
router.post('/save', ArticleController.save);
router.get('/articles/:last?', ArticleController.getArticles); //:last? parámetro opcional
router.get('/article/:id', ArticleController.getArticle);
router.put('/article/:id', ArticleController.update);
router.delete('/article/:id', ArticleController.delete);
//router.post('/upload-image/:id', mul_upload, ArticleController.upload); //md_upload middleware para procesar subida de archivos
//router.post('/upload-image-album/:id', [md_auth.ensureAuth, mul_upload.single('image')], ArticleController.upload);
//router.post('/upload-image/:id', mul_upload.single('file0'), ArticleController.upload);
router.post('/upload-image-album/:id', [ mul_upload.single('image')], ArticleController.upload);

//Exportar módulo para poder usarlo en app.js
module.exports = router;