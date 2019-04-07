'use strict';

const express = require('express');
const router = express.Router();
const apiArticulos = require('./articulos.api');

router.param('idDelArticulo', function(req, res, next, idDelArticulo){
    req.body.idDelArticulo = idDelArticulo;
    next();
});

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

router.route('/buscarArticulo/:idDelArticulo')
.get(
    function(req, res){
        apiArticulos.buscarArticuloId(req, res);
    }
);

module.exports = router;