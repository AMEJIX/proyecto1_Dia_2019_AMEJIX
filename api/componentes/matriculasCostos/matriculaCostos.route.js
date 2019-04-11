'use strict';

const express = require('express');
const router = express.Router();
const apiRegistrarMatricula = require('./matriculaCostos.api');

/**************************************************************************************************************/

router.param('idCE', (req, res, next, idCE) => {
    req.body.idCE = idCE;
    next();
});

/**************************************************************************************************************/

router.route('/registrarMatricula')
    .post(
        function (req, res) {
            apiRegistrarMatricula.registrar(req, res);
        }
    );

/**************************************************************************************************************/

router.route('/listarMatriculasCE/:idCE')
    .get(
        function (req, res) {
            apiRegistrarMatricula.listarMatriculasCE(req, res);
        }
    );

/**************************************************************************************************************/

router.route('/buscarMatricula/:_id')
    .get(
        function (req, res) {
            apiRegistrarMatricula.buscarMatricula(req, res);
        }
    );

/**************************************************************************************************************/

router.route('/editarMatricula')
    .post(
        function (req, res) {
            apiRegistrarMatricula.editar(req, res);
        }
    );

/**************************************************************************************************************/


router.route('/eliminarMatricula')
    .post(
        (req, res) => {
            apiRegistrarMatricula.eliminar(req, res);
        }
    );

module.exports = router;

module.exports = router;