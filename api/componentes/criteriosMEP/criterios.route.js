'use strict';

const express = require('express');
const router = express.Router();
const apiCriterios = require('./criterios.api');

router.route('/registrarCriterio')
    .post(
    function(req, res){
        apiCriterios.registrarElCriterio(req, res);
    }
);

router.route('/listarCriterios')
    .get(
    function(req, res){
        apiCriterios.listarLosCriterios(req, res);
    }
);

module.exports = router;