'use strict';

const express = require('express');

const router = express.Router();

const apiPreguntasFrecuentes = require('./preguntasFrecuentes.api');

router.param('idCE', (req, res, next, idCE) =>{
    req.body.idCE = idCE;

    next();
});

router.route('/validarNuevaPregunta')
    .get(
        function (req, res) {
            apiPreguntasFrecuentes.validarNuevaPregunta(req, res);
        }
    );

router.route('/registrarPreguntaFrecuente')
    .post(
        function (req, res) {
            apiPreguntasFrecuentes.registrarPreguntaFrecuente(req, res);
        }
    );

router.route('/centroEducativo/listarPreguntasFrecuentes/:idCE')
    .get(
        function (req, res) {
            apiPreguntasFrecuentes.listarPreguntasFrecuentes(req, res);
        }
    );

// router.route('/padreFamilia/listarPreguntasFrecuentes')
//     .get(
//         function (req, res) {
//             apiPreguntasFrecuentes.listarPreguntasFrecuentesPF(req, res)
//         }
//     );

module.exports = router;