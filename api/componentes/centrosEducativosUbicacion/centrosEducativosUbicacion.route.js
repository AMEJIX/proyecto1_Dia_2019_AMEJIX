'use strict';

const express = require('express');
const router = express.Router();
const apiCEUbicacion = require('./centrosEducativosUbicacion.api');


router.route('/listarCEUbicacion')
    .get(
    function(req, res){
        apiCEUbicacion.listarCEUbicacion(req, res);
    });

module.exports = router;
