'use strict';

const express = require('express');
const api_sucursal = require('./sucursales.api');
const router = express.Router();

router.route('/registrar_sucursal')
    .post(
        function (req, res) {
            api_sucursal.registrar(req, res);
        }
    );

router.route('/listar_sucursales')
    .get(
        function (req, res) {
            api_sucursal.listar_todos(req, res);
        }
    );
module.exports = router;
module.exports = router;