'use strict';

const mongoose = require('mongoose');

let schemaCitas = new mongoose.Schema(
    {
        fechaHora: {type: Date, required : true},
        nombreCentroEducativo: {type: String, required: true, unique: true},
        nombrePadreFamilia: {type: String, required: true},
        correoPadreFamilia: {type: String, required: true, unique: true}
    }
);

module.exports = mongoose.model('citas', schemaCitas);