'use strict'

const express = require('express');
const router = express.Router();
const apiRegistrarIdiomas = require('./idiomas.api');

router.route('/registrarIdiomas')
    .post(
        function (req, res) {
            apiRegistrarIdiomas.registrar(req, res);
        }
    );

router.route('/listarIdiomas')
    .get(
        function (req, res) {
            apiRegistrarIdiomas.listar(req, res);
        }
    );

module.exports = router;