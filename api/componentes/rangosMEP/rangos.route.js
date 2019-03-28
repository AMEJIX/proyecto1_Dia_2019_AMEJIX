'use strict';

const express = require('express');
const router = express.Router();
const apiRangos = require('./rangos.api');


router.route('/registrarRango')
.post(
    function(req, res){
        apiRangos.registrarElRango(req, res);
    }
)

router.route('/listarRangos')
.get(
    function(req, res){
        apiRangos.listarLosRangos(req, res);
    }
)

module.exports = router;