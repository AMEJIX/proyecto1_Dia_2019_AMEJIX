'use strict';

const express = require('express');
const router = express.Router();
const starsPFApi = require('./starsPF.api');

router.param('idCE', (req, res, next, idCE) => {
    req.body.idCE = idCE;

    next();
});

router.route('/registrarEvaluacion')
    .post(
        function (req, res) {
            starsPFApi.registrarEvaluacion(req, res);
        }
    );

router.route('/modificarEvaluacion')
    .post(
        function (req, res) {
            starsPFApi.modificar(req, res);
        }
    );

router.route('/obtenerEvaluacion/:idCE')
    .get(
        function (req, res) {
            starsPFApi.obtenerEvaluacion(req, res);
        }
    );

module.exports = router;