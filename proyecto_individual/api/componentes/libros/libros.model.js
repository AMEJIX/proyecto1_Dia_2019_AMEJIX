'use strict';

const mongoose = require('mongoose');

let schema_libro = new mongoose.Schema(
    {
        isbn : {type : String, required : true},
        titulo : {type : String, required : true},
        categoria : {type : String, required : true},
        editorial : {type : String, required : true},
        autor : {type : String, required : true},
        precio : {type : Number, required : true},
        portada : {type : String, required : false}
    }
);

module.exports = mongoose.model('Libro', schema_libro);