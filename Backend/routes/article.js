"use strict";
/*"jshint node": true*/

var express = require("express");
var ArticleControler = require("../controllers/article");

var router = express.Router();

/* //Con multiparty (tutorial) no me funciona
var multipart = require ('connect-multiparty');
var md_upload = multipart ({ uploadDir: './upload/articles'});

*/

//Hecho con Multer (visto en stackoverflow)
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload/articles");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + ".jpg"); //Appending .jpg
  },
});

var upload = multer({ storage: storage });

//Rutas de prueba
router.post("/datos-curso", ArticleControler.datosCurso);
router.get("/test-de-controlador", ArticleControler.test);

//Rutas útiles
router.post("/save", ArticleControler.save);
router.get("/articles/:last?", ArticleControler.getArticles);
router.get("/article/:id", ArticleControler.getArticle);
router.put("/article/:id", ArticleControler.update);
router.delete("/article/:id", ArticleControler.delete);
//router.post ('/upload-image/:id', md_upload, ArticleControler.upload); //Multiparty
router.post("/upload-image/:id", upload.any(), ArticleControler.upload); //Multer

module.exports = router;
