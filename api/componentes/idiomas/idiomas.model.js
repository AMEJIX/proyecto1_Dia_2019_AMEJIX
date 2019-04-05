'use strict'

const mongoose = require('mongoose');

let schemaRegistrarIdiomas = new mongoose.Schema(
    {
        idiomas: { type: String, required: true }
    }
);

module.exports = mongoose.model('idiomas', schemaRegistrarIdiomas);