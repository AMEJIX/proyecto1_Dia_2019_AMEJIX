'use strict';

const express = require('express');
const router = express.Router();
const apiRegistrarNoticia = require('./registrarNoticia.api');

router.param('idCE', (req, res, next, idCE) => {
    req.body.idCE = idCE;
    next();
});

router.route('/registrarNoticia')
    .post(
        function (req, res) {
            apiRegistrarNoticia.registrar(req, res);
        }
    );

router.route('/listarNoticias')
    .get(
        function (req, res) {
            apiRegistrarNoticia.listarNoticias(req, res);
        }
    );

router.route('/listarNoticiasCE/:idCE')
    .get(
        function (req, res) {
            apiRegistrarBeca.listarNoticiasCE(req, res);
        }
    );

module.exports = router;