'use strict';

const express = require('express');
const router = express.Router();
const api_libros = require('./libros.api');

router.route('/registrar_libro')
    .post(
        function (req, res) {
            api_libros.registrar(req, res);
        }
    );

router.route('/listar_libros')
    .get(
        function (req, res) {
            api_libros.listar_todos(req, res);
        }
    );

module.exports = router;