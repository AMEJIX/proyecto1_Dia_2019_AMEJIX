'use strict';

const express = require('express');
const router = express.Router();
const api_usuarios = require('./usuarios.api');


router.route('/registrar_usuario')
    .post(
        function (req, res) {
            api_usuarios.registrar(req, res);
        }
    );



router.route('/validarCredenciales')
    .post(
        function (req, res) {
            api_usuarios.validar (req, res);
        }
    );

    router.route('/listaCE')
    .get(
        function (req, res) {
            api_usuarios.listarCE(req, res);
        }
    );

router.route('/listaPF')
    .get(
        function (req, res) {
            api_usuarios.listarPF(req, res);
        }
    );

router.route('/listarCEPorOU')
    .post(
        function (req, res){
            api_usuarios.listarCEOusuario(req, res);
        }
    );

router.route('/listarPFPorSA')
    .post(
        function (req, res){
            api_usuarios.listarPFPorSA(req, res);
        }
);

router.route('/listarInfoMEP')
    .get(
        function (req, res){
            api_usuarios.listarMEP(req, res);
        }
);
    
module.exports = router;