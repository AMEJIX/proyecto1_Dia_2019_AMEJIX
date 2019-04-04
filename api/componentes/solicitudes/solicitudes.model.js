'use strinct'


let mongoose = require('mongoose');

let solicitudSchema = new mongoose.Schema({

    usuario:{type: String, required: false},
    estado:{type: String, required: false},
    fecha:{type: String, required: false}

})

module.exports = mongoose.model('Solicitudes', solicitudSchema);