'use strict';

const express = require('express');
const router = express.Router();
const apiCitas = require('./citas.api');

router.route('/registrarCita')
    .post(
        function (req, res) {
            apiCitas.registrarCita(req, res);
        }
    );

router.route('/listarCitas')
    .get(
        function (req, res) {
            apiCitas.listarCitas(req, res);
        }
    );

module.exports = router;