'use strict'

var express = require('express');
var ArticleControler = require('../controllers/article');

var router = express.Router();

router.post('/datos-curso', ArticleControler.datosCurso);
router.get('/test-de-controlador', ArticleControler.test);

module.exports = router;