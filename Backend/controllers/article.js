'use strict'

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
    }
}; //end controller

module.exports = controller;

