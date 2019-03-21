'use strict';

const mongoose = require('mongoose');

let esquemaPreguntasFrecuentes = new mongoose.Schema(
    {
        pregunta: {type : String, required : true},
        respuesta:  {type : String, required : true}
    }
);

module.exports = mongoose.model('Preguntas Frecuente', esquemaPreguntasFrecuentes);