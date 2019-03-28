'use strict';

const express = require('express');
const router = express.Router();
const apiActividades = require('./actividades.api');

router.route('/registrarActividad')
    .post(
    function(req, res){
        apiActividades.registrar(req, res);
    }
);

router.route('/listarActividades')
    .post(
    function(req, res){
        apiActividades.listarActividades(req, res);
    }
);

module.exports = router;