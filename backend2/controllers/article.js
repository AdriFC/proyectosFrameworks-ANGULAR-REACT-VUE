//Clase con métodos y rutas relacionadas con artículos del API

'use strict'

//Importar módulos necesarios
var validator = require('validator'); //librería instalada que valida formularios enviados por cliente
var Article = require('../models/article') //Importar modelo, clase para crear objetos y guardarlos en bbdd



var controller = {

    datosCurso: (req/*recibo*/ , res/*devuelvo*/) => {
        var hola = req.body.hola;
        return res.status(200).send({
            curso: 'Master en frameworks JS',
            autor: 'Víctor Robles',
            hola
        });    
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la acción test de mi controlador de artículos'
        });
    },

    //Método guardar artículos
    save: (req,res) =>{
        //Recoger parámetros por post
        var params = req.body;

        //Validar datos (validator)
        try{
            var validate_title = !validator.isEmpty(params.title); //True si no está vacio params title
            var validate_content = !validator.isEmpty(params.content); //True si no está vacio params content
        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar!'
            });
        }

        if(validate_title && validate_content){ //Comprobar que title y content son correctos
            //Crear el objeto a guardar
            var article = new Article(); //Instanciar objeto creado en el modelo

            //Asignar valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;

            //Guardar el artículo
            article.save((err, articleStored) => {

                if(err || !articleStored){
                    return res.status(404).send({
                        status: 'error',
                        message: 'El artículo no se ha guardado!'
                    });
                }
                //Devolver una respuesta 
                return res.status(200).send({
                    status: 'success',
                    article: articleStored
                });
            });
            
        }else{
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son válidos!'
            });
        }
    },

    //Método sacar artículos (opción 5 últimos)
    getArticles: (req, res) => {

        var query = Article.find({});
        var last = req.params.last;

        //Sacar lo 5 últimos artículos
        if(last || last!= undefined){
            query.limit(5);
        }
        

        //Find (Sacar datos BD)
        query.sort('-_id').exec((err, articles) => {

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los artículos!'
                });
            }

            if(!articles){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay artículos para mostrar!'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });
        }); 
    },

   //Método sacar 1 artículo concreto
    getArticle: (req,res) => {

        //Recoger id de la url
        var articleId = req.params.id;

        //Comprobar que existe
        if(!articleId || articleId == null){
            return res.status(404).send({
                status: 'error',
                message: 'No existe el artículo!'
            });
        }

        //Buscar el artículo
        Article.findById(articleId, (err, article) =>{

            if(err || !article){
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el artículo!'
                });
            }

            //Devolverlo en Json
            return res.status(404).send({
                status: 'success',
                article
            });

        });
        
    }

}; //End controller

//Poder usar controller fuera del archivo y usar sus métodos en archivo de rutas
module.exports = controller;