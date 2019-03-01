'use strict';

const mongoose = require('mongoose');

let schema_sucursal = new mongoose.Schema(
    {
        codigo : {type : String, required : true, unique: true},
        nombre : {type : String, required : true},
        telefono : {type : String, required : true},
        direccion_exacta : {type : String, required : true},
        ubicacion : {type: String,  required : false}
    }
);

module.exports = mongoose.model('Sucursale', schema_sucursal);