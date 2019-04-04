'use strict';

const express = require('express');
const router = express.Router();
const apiBitacora = require('./bitacora.api');


router.route('/registrarBitacora')
    .post(
        function (req, res) {
            api_usuarios.registrar(req, res);
        }
    );


router.route('/listBitacora')
    .get(
        function (req, res) {
            api_usuarios.listarPF(req, res);
        }
    );

module.exports = router;