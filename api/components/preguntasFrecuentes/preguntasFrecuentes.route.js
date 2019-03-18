'use strict';

const express = require('express');

const router = express.Router();

const apiPreguntasFrecuentes = require('./preguntasFrecuentes.api');

router.route('/registrarPreguntaFrecuente')
    .post(
        function (req, res) {
            apiPreguntasFrecuentes.registrarPreguntaFrecuente(req, res)
        }
    );

router.route('/listarPreguntasFrecuentes')
    .get(
        function (req, res) {
            apiPreguntasFrecuentes.listarPreguntasFrecuentes(req, res)
        }
    );

module.exports = router;