'use strict';

const mongoose = require('mongoose');

let schemaRegistrarMatriculaCostos = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    fieldsetPrecio: { type: String, required: true },
    idCE: { type: String, required: true },
});

module.exports = mongoose.model('matriculaCostos', schemaRegistrarMatriculaCostos);
