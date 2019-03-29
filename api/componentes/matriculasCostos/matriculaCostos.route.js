'use strict';

const express = require('express');
const router = express.Router();
const apiRegistrarMatricula = require('./matriculaCostos.api');

router.param('idCE', (req, res, next, idCE) => {
    req.body.idCE = idCE;
    next();
});

router.route('/registrarMatricula')
    .post(
        function (req, res) {
            apiRegistrarMatricula.registrar(req, res);
        }
    );

// router.route('/listarMatriculas')
//     .get(
//         function (req, res) {
//             apiRegistrarMatricula.listarMatriculas(req, res);
//         }
//     );

router.route('/listarMatriculasCE/:idCE')
    .get(
        function (req, res) {
            apiRegistrarMatricula.listarMatriculasCE(req, res);
        }
    );

module.exports = router;