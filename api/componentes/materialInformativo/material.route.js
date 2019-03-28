'use strict';

const express = require('express');
const router = express.Router();
const materialApi = require('./material.api');

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
    
module.exports = router;