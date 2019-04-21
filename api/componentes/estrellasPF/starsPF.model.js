'use strict';

let mongoose = require('mongoose');

let stars = new mongoose.Schema(
    {
        photoCE: {type: String, required: false},
        nameCE: {type: String, required: true},
        provinciaCE: {type: String, required: false},
        stars: {type: Number, required: true, unique: false},
        idCE: {type: String, required: true, unique: true}
    }
);

module.exports = mongoose.model('StarsPF', stars);