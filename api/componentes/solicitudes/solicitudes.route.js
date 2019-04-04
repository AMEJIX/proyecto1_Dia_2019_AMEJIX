'use strict'

const express = require('express');
const router = express.Router();
const apiSolicitud = require('./solicitudes.api')

router.route('/registrarSolicitud')
    .post(
        function(req, res){
            apiSolicitud.registrarSolicitudes(req, res);
        }
    )

router.route('/listarSolicitud')
        .get(
            function(req, res){
            apiSolicitud.listarSolicitudes(req, res);
            }
        )

module.exports = router;