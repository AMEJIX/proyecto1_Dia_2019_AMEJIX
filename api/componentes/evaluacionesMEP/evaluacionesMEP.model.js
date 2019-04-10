'use strict';

const mongoose = require("mongoose");

let schemaEvaluacionMEP = new mongoose.Schema(
    {
        nombre: {type: String, required: true},
        total : {type: Number, required: true},
        estrellas: {type: String, required: true},       
        anno: {type: Number, required: true},
        idCE: {type: String, required: true}
    }
);

module.exports = mongoose.model('EvaluacionesMEP', schemaEvaluacionMEP);

