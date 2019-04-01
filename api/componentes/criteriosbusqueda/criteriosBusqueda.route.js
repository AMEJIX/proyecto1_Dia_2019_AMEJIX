'use strict';

const express = require('express');

const router = express.Router();

const apiCriteriosBusqueda = require('./criteriosBusqueda.api');

router.param('nombre', (req, res, next, nombre) =>{
    req.body.nombre = nombre;

    next();
});

router.route('/validarEtiqueta/:nombre')
    .get(
        function (req, res) {
            apiCriteriosBusqueda.validarEtiqueta(req, res);
        }
    );

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