'use strict';

const express = require('express');
const router = express.Router();
const apiRegistrarNoticia = require('./noticias.api');

router.route('/registrar_noticia')
    .post(
        function (req, res) {
            apiRegistrarNoticia.registrar(req, res);
        }
    );

router.route('/listar_noticias')
    .get(
        function (req, res) {
            apiRegistrarNoticia.listarNoticias(req, res);
        }
    );

module.exports = router;