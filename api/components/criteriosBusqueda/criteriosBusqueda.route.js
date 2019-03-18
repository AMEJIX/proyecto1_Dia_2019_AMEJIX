'use strict';

const express = require('express');

const router = express.Router();

const apiCriteriosBusqueda = require('./criteriosBusqueda.api');

router.route('/registrarCriterioBusqueda')
    .post(
        function (req, res) {
            apiCriteriosBusqueda.registrarCriterioBusqueda(req, res);
        }
    );

router.route('/listarCriteriosBusqueda')
    .get(
        function (req, res) {
            apiCriteriosBusqueda.listarCriteriosBusqueda(req, res);
        }
    );

module.exports = router;