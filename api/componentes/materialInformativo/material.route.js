'use strict';

const express = require('express');
const router = express.Router();
const materialApi = require('./material.api');

router.param('idCE', (req, res, next, idCE) => {
    req.body.idCE = idCE;

    next();
});

router.route('/registrarMaterialInformativo')
    .post(
        function (req, res) {
            materialApi.registrar(req, res);
        }
    );

router.route('/listarMaterialInformativo')
    .get(
        function (req, res) {
            materialApi.listarMaterial(req, res);
        }
    );

router.route('/centroEducativo/listarMaterialUsuario/:idCE')
        .get(
            function (req, res) {
                materialApi.listarMaterialUsuario(req, res);
            }
        );

router.route('/buscarMaterial')
.post(
    function (req, res) {
        materialApi.actualizar(req, res);
    }
);

module.exports = router;