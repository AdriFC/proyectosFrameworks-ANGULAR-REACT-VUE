'use strict'
/*"jshint node": true*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now},
    image: String
});

module.exports = mongoose.model('Article', ArticleSchema);

//MongoDB al guardar pluraliza (articles) guarda documentos de este tipo y con esta estructura dentro de la colección.
