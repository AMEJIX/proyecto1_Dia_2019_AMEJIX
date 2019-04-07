'use strict';

const express = require('express');

const router = express.Router();

const apiCriteriosBusqueda = require('./criteriosBusqueda.api');

router.param('nombre', (req, res, next, nombre) =>{
    req.body.nombre = nombre;

    next();
});

router.param('id', (req, res, next, id) =>{
    req.body.id = id;

    next();
});

router.route('/validarEtiqueta/:nombre')
    .get(
        function (req, res) {
            apiCriteriosBusqueda.validarEtiqueta(req, res);
        }
    );

router.route('/administrador/registrarCriterioBusqueda')
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

router.route('/obtenerCriterioBusqueda/:id')
    .get(
        (req, res) =>{
            apiCriteriosBusqueda.getEtiqueta(req, res);
        }
    );

router.route('/administrador/modificarEtiqueta')
    .post(
        (req, res) =>{
            apiCriteriosBusqueda.actualizar(req, res);
        }
    );
router.route('/administrador/eliminarEtiqueta')
    .post(
        (req, res) =>{
            apiCriteriosBusqueda.eliminar(req, res);
        }
    );

module.exports = router;