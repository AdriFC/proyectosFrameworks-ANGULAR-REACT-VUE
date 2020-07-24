//Clase con métodos y rutas relacionadas con artículos del API

'use strict'

//Importar módulos necesarios
var validator = require('validator'); //librería instalada que valida formularios enviados por cliente
var Article = require('../models/article') //Importar modelo, clase para crear objetos y guardarlos en bbdd
var fs = require('fs'); //fileSystem permite eliminar archivos de nuestro sistema de ficheros (Pertenece a Nodejs)
var path = require('path'); //sirve para obtener la ruta o direccion de un archivo dentro del servidor (Pertebece a Nodejs)
const { exists } = require('../models/article');


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
    },

    //Método actualizar datos de artículo
    update: (req,res) =>{

        //Recoger el id del artículo por la url
        var articleId = req.params.id;

        //Recoger los datos que llegan por put
        var params = req.body;

        //Validar datos
        try{
            var validate_title = !validator.isEmpty(params.title); //True si no está vacio params title
            var validate_content = !validator.isEmpty(params.content); //True si no está vacio params content

        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar!'
            });
        }

        if(validate_title && validate_content){
            //Find and update
            Article.findByIdAndUpdate({_id: articleId}, params,{new:true},/*Devuelve el objeto actualizado*/ (err, articleUpdated) =>{
                if(err){
                    return res.status(200).send({
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

    //Método borrar artículos
    delete: (req,res) => {

        //Recoger el id de la url
        var articleId = req.params.id;

        //Find and delete
        Article.findOneAndDelete({_id: articleId}, (err, articleRemoved) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message:'Error al borrar!'
                });
            }

            if(!articleRemoved){
                return res.status(404).send({
                    status: 'error',
                    message:'No se borró el artículo, posiblemente no exista!'
                });
            }

            return res.status(404).send({
                status: 'success',
                article: articleRemoved
            });
        });
    },

    upload: (req,res) => {
        
        //Configurar módulo connect multiparty router/article.js (hecho)

        //Recoger el fichero de la petición
        var file_name = 'Imagen no subida...';
        
        if(!req.file){
            return res.status(404).send({
                status:'error',
                message: file_name
            });
        }
        
        //Conseguir nombre y extensión del archivo
        var file_path = req.file.path;
        var file_split = file_path.split('\\');

        /*
        ADVERTENCIA linux o mac:
        var file_split = file_path.split('/');
        */

        //Nombre del archivo
        var file_name = file_split[2];

        //Extensión del fichero
        var extension_split = file_name.split('\.');
        var file_ext = extension_split[1];
        var articleID = req.params.id;

        //Comprobar la extensión, solo imágenes, si no es válida borrar fichero
        if(file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif'){
            //borrar el archivo subido
            fs.unlink(file_path, (err) =>{
                return res.status (200).send({
                    status:'error',
                    message:'La extensión de la imagen no es válida!'
                });
            });
        }else{
             //Si todo es válido, sacar id de la url
             var articleId = req.params.id;

             //Buscar el artículo, asignarle el nombre de la imagen y actualizarlo
            Article.findOneAndUpdate({_id: articleID}, {image: file_name}, {new:true}, (err, articleUpdated) =>{

                if(err || !articleUpdated){
                    return res.status (200).send({
                        status: 'error',
                        message: 'Error al guardar la imagen de artículo!'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                });
            });  
        } 
    }, //End upload file

    getImage: (req, res) => {
        //Sacar fichero que nos llega por la url
        var file = req.params.image
        var path_file = 'upload/articles/'+file;

        //Comprobar si el fichero existe
        fs.exists(path_file, (exists) => {
            console.log(exists);
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status (404).send({
                    status: 'error',
                    message: 'La imagen no existe!!'
                });
            }
        });
    },

    search: (req, res) => {
        //Sacar el string a buscar
        var searchString = req.params.search;

        //Find or
        Article.find({"$or": [
			{"title": {"$regex" : searchString, "$options" : "i"}},
			{"content": {"$regex" : searchString, "$options" : "i"}}
			//Si el searchString esta contenido dentro de title o content entonces devuelve los articulos que coincidan
        ]})
        .sort([['date', 'descending']])
		.exec((err, articles) => {
			if(err){
				return res.status(500).send({
					status: 'error',
					message: 'Error en la peticion'
				});
			}
			if(!articles || articles.length <= 0){
				return res.status(404).send({
					status: 'error',
					message: 'No se encontraron resultados'
				});
			}
			return res.status(200).send({
				status: 'success',
				articles
			});
		});
        
    }

}; //End controller

//Poder usar controller fuera del archivo y usar sus métodos en archivo de rutas
module.exports = controller;