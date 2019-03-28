'use strict';

const express = require('express');
const router = express.Router();
const apiPrueba = require('./prueba.api');

router.route('/listarCentros')
    .get(
        function(req, res){
            apiPrueba.listarCE (req, res);
        }
    );

module.exports = router;


