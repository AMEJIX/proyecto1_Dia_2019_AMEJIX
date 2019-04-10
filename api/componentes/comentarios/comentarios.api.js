'use strict';

const comentariosModel = require('./comentarios.model');

module.exports.registrar = (req, res) => {
    let nuevoComentario = new comentariosModel(
        {
            stars: req.body.stars,
            comment: req.body.comment,
            idCE: req.body.idCE
        }
    );

    nuevoComentario.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `El comentario no pudo ser registrado ${error}.`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `El comentario se ha registrado correctamente.`
                }
            );
        }
    });
};

module.exports.listarComentarioUsuario = (req, res) => {
    comentariosModel.find().then(
        function (comentario) {

            let listaComentariosUser = [];

            for (let comentarioUser of comentario) {
                if (comentarioUser.idCE == req.body.idCE) {
                    listaComentariosUser.push(comentarioUser);
                }
            }
            console.log(listaComentariosUser);
            console.log(req.body.idCE);
            if (listaComentariosUser.length > 0) {
                res.json({
                    success: true,
                    comentario: listaComentariosUser
                });
            } else {
                res.json({
                    success: false,
                    comentario: 'No se encontraron comentarios registrados'
                });
            }
        }
    );
};

module.exports.eliminar = function (req, res) {
    comentariosModel.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar el comentario' });
            } else {
                res.json({ success: true, msg: 'El comentario se eliminó con éxito' });
            }
        })
}