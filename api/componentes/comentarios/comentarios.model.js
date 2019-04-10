'use strict';

let mongoose = require('mongoose');

let comentariosSchema = new mongoose.Schema(
    {
        stars: {type: Number, required: false },
        comment: {type: String, required: true },
        idCE: {type: String, required: true}
    }
);

module.exports = mongoose.model('Comentarios', comentariosSchema);