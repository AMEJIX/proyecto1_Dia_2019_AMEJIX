'use strict';

const express = require('express');
const router = express.Router();
const apiRegistrarMatricula = require('./registrarMatriculaCostos.api');

router.route('/registrar_matricula')
    .post(
        function (req, res) {
            apiRegistrarMatricula.registrar(req, res);
        }
    );

router.route('/listar_matriculas')
    .get(
        function (req, res) {
            apiRegistrarMatricula.listarMatriculas(req, res);
        }
    );

module.exports = router;