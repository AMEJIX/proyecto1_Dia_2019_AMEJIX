'use strict';

const express = require('express');
const router = express.Router();
const apiRegistrarBeca = require('./registrarBeca.api');

router.param('idCE', (req, res, next, idCE) => {
    req.body.idCE = idCE;
    next();
});

router.route('/registrarBeca')
    .post(
        function (req, res) {
            apiRegistrarBeca.registrar(req, res);
        }
    );

router.route('/listarBecas')
    .get(
        function (req, res) {
            apiRegistrarBeca.listarBecas(req, res);
        }
    );

router.route('/listarBecasCE/:idCE')
    .get(
        function (req, res) {
            apiRegistrarBeca.listarBecasCE(req, res);
        }
    );

module.exports = router;