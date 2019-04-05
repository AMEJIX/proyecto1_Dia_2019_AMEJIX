'use strict';

const express = require('express');
const router = express.Router();
const apiArticulos = require('./articulos.api');

router.route('/registrarArticulo')
.post(
    function(req, res){
        apiArticulos.registrar(req, res);
    }
);

router.route('/listarArticulo')
.post(
    function(req, res){
        apiArticulos.listarArticulo(req, res);
    }
);

module.exports = router;