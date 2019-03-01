'use strict';

const mongoose = require('mongoose');

let schema_editorial = new mongoose.Schema(
    {
        codigo : {type : String, required : true},
        nombre : {type : String, required : true},
        pais : {type : String, required : true}
    }
);

module.exports = mongoose.model('Editoriale', schema_editorial);