'use strict';

const express = require('express');
const router = express.Router();

const apiEvaluacionMEP = require('./evaluacionesMEP.api');
const apiCriterios = require('../criteriosMEP/criterios.api');
const apiRangos = require('../rangosMEP/rangos.api');


router.route('/listarCE')
    .get(
    function(req, res){
        apiEvaluacionMEP.listarCE(req, res);
    });

router.route('/listarCriteriosEvaluacion')
    .get(
    function(req, res){
        apiCriterios.listarLosCriterios(req, res);
    }
);

router.route('/listarRangosEvaluacion')
.get(
    function(req, res){
        apiRangos.listarLosRangos(req, res);
    }
)

router.route('/registrarEvaluacionMEP')
.post(
    function(req, res){
        apiEvaluacionMEP.registrarEvaluacionMEP(req, res);
    }
)


router.route('/listarCEEvaluados')
.post(
    function(req, res){
        apiEvaluacionMEP.listarCEEvaluados(req, res);
    }
)





module.exports = router;
