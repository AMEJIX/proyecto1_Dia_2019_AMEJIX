'use strict';

const express = require('express');
const router = express.Router();
const apiUtiles = require('./utiles.api');

router.route('/registrarUtil')
.post(
    function(req, res){
        apiUtiles.registrar(req, res);
    }
);

router.route('/listarUtilNivel')
.post(
    function(req, res){
        apiUtiles.listarUtilNivel(req, res);
    }
)

router.route('/listarTodos')
.get(
    function(req, res){
        apiUtiles.listarTodos(req, res);
    }
)
module.exports = router;