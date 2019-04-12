'use strict';

const express = require('express');
const router = express.Router();
const comentariosApi = require('./comentarios.api');

router.param('idCE', (req, res, next, idCE) => {
    req.body.idCE = idCE;

    next();
});

router.param('_id', function (req, res, next, _id) {
    req.body._id = _id;
    next();
});

router.route('/registrarComentario')
    .post(
        function (req, res) {
            comentariosApi.registrar(req, res);
        }
    );

router.route('/centroEducativo/listarComentarioUsuario/:idCE')
    .get(
        function (req, res) {
            comentariosApi.listarComentarioUsuario(req, res);
        }
    );

// router.route('/buscarMaterial/:_id')
//     .get(
//         function (req, res) {
//             comentariosApi.buscarMaterial(req, res);
//         }
//     );

router.route('/eliminarComentario')
    .post(
        (req, res) => {
            comentariosApi.eliminar(req, res);
        }
    );

module.exports = router;