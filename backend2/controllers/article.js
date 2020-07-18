//Clase con métodos y rutas relacionadas con artículos del API

'use strict'

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
    }

}; //End controller

//Poder usar controller fuera del archivo y usar sus métodos en archivo de rutas
module.exports = controller;