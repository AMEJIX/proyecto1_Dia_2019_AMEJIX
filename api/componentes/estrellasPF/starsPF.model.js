'use strict';

let mongoose = require('mongoose');

let stars = new mongoose.Schema(
    {
        stars: {type: Number, required: true, unique: false},
        idCE: {type: String, required: true, unique: true}
    }
);

module.exports = mongoose.model('StarsPF', stars);