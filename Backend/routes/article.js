"use strict";
/*"jshint node": true*/

var express = require("express");
var ArticleController = require("../controllers/article");

var router = express.Router();

/*
 //Con multiparty (tutorial) no me funciona
var multipart = require ('connect-multiparty');
var md_upload = multipart ({ uploadDir: './upload/articles'});
*/

/*
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
*/

//Hecho con Multer (comentario victor, curso)
var crypto = require('crypto');
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
router.post("/datos-curso", ArticleController.datosCurso);
router.get("/test-de-controlador", ArticleController.test);

//Rutas útiles
router.post("/save", ArticleController.save);
router.get("/articles/:last?", ArticleController.getArticles);
router.get("/article/:id", ArticleController.getArticle);
router.put("/article/:id", ArticleController.update);
router.delete("/article/:id", ArticleController.delete);
//router.post ('/upload-image/:id', md_upload, ArticleController.upload); //Multiparty
//router.post("/upload-image/:id", upload.any(), ArticleController.upload); //Multer
router.post ('/upload-image/:id', mul_upload, ArticleController.upload); //Multer(victor)

module.exports = router;
