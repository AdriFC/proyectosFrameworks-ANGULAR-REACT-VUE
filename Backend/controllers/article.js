'use strict'

var validator = require('validator');
var Article = require('../models/article');

var controller = {

    datosCurso: (req, res) =>{
        return res.status(200).send({
            curso: 'Master en frameworks JS',
            autor: 'Victor Robles'
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la acción test de mi controlador de artítulos'
        });
    },

    save: (req, res) => {
        //Recoger parámetros por post
        var params = req.body;
        

        //validar datos (validator)
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        }catch(err){
            return res.status(200).send({
                status: 'error',
                message : 'Faltan datos por enviar!'
            });
        }

        if (validate_title && validate_content){

            //Crear el objecto a guardar
            var article = new Article();

            //Asignar valores
            article.title = params.title;
            article.content = params.content;
            article.image = null;

            //Guardar el artículo
            article.save((err, articleStored) => {

                if (err || !articleStored){
                    return res.status(404).send({
                        status: 'error',
                        message: 'el artículo no se ha guardado!'
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
                message : 'Los datos no son válidos!'
            });
        }

        
    },

    //Método devolver los artículos de la bbdd
    getArticles: (req, res) => {

        var query = Article.find({});

        var last = req.params.last;

        if(last || last != undefined){
            query.limit(5);
        }

        //Find
        query.sort('-_id').exec ((err, articles) =>{

            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los artículos'
                });
            }

            if(!articles){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay artículos para mostar!'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            });
        });
    },

    getArticle: (req, res) =>{

        //Recoger el id de la url
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
                    message: 'No existe el articulo!'
                });
            }

            //Devolverlo en Json
            return res.status(404).send({
                status: 'success',
                article
            });
        });

        
    },

    update: (req, res) => {
        //Recoger el id del artículo por la url
        var articleId = req.params.id;

        //Recoger los datos que llegan por PUT
        var params = req.body;

        //Validar los datos
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);
        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar!'
            });
        }

        if(validate_title && validate_content){
            //Find & update
            Article.findOneAndUpdate({_id: articleId}, params, {new:true}, (err, articleUpdated) => {
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar!'
                    }); 
                }

                if(!articleUpdated){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el artículo!'
                    }); 
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                }); 

            });
        }else{
            //Devolver respuesta
        return res.status(200).send({
            status: 'error',
            message: 'La validación no es correcta!'
        });
        }
    },

    delete: (req, res) => {
        //Recoger el id de la url
        var articleId = req.params.id;

        //Find & delete
        Article.findOneAndDelete({_id: articleId}, (err, articleRemoved) =>{
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar!'
                });
            }

            if(!articleRemoved){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el artículo, posiblemente no exista!'
                });
            }

            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            });
        });
        
    },

    upload: (req, res) => {
        //Configurar el módulo connect multiparty (Multer en este caso) router/article.js (hecho)

        //Recoger el fichero de la petición
        var file_name = 'Imagen no subida...';

        if(!req.files){
            return res.status(404).send({
                status: 'error',
                message: file_name
            });
        }
        
        //Conseguir el nombre y la extensión del archivo
        var file_path = req.files.file0.path;
        var file_split = file_path.split('\\');

        //Comprobar la extensión (solo imágenes), si no es válida borrar el fichero

        //Si todo es válido

        //Buscar el artículo, asignarle el nombre de la imagen y actualizarlo
        return res.status(404).send({
            fichero: req.files,
            split: file_split
        });
    }

}; //end controller

module.exports = controller;
