//Fichero principal, punto entrada (conexion bd, peticiones etc)

'use strict'  //Mejores prácticas de desarrollo con JS

//Importar módulos
var mongoose = require('mongoose'); //Cargar módulo mongoose
var app = require('./app'); //Carga archivo app (servidor web)
var port = 3900; //Puerto para esta aplicación

//Usamos el método set para desactivar métodos antiguos y trabajar de forma más actualizada
mongoose.set('useFindAndModify',false);

//Promesa para evitar fallos al conectarse y trabajar con la BD
mongoose.Promise = global.Promise; 

//Conexión a MongoDB (Promesa que contiene función de callback)
mongoose.connect('mongodb://localhost:27017/api_rest_blob'/*url*/,{useNewUrlParser: true, useUnifiedTopology: true}/*opciones*/)
    .then(()=>{ 
        console.log('Conexión establecida correctamente!!');

        //Crear servidor y escuchar peticiones HTTP
        app.listen (port, ()=>{
            console.log('Servidor corriendo en http://localhost:'+port);
        });
});     
