'use strict';

const express = require('express');
const router = express.Router();
const api_editorial = require('./editoriales.api');

router.route('/registrar_editorial')
    .post(
        function (req, res) {
            api_editorial.registrar(req,  res);
        }
    );

router.route('/listar_editoriales')
    .get(
        function (req, res) {
            api_editorial.listar_todos(req, res);
        }
    );
module.exports = router;