'use strict';

const modeloRegistrarNoticia = require('./noticias.model');

module.exports.registrar = (req, res) => {

    let nuevaNoticia = new modeloRegistrarNoticia(
        {
            tituloNoticia: req.body.tituloNoticia,
            fechaNoticia: req.body.fechaNoticia,
            registrarNoticia: req.body.registrarNoticia,
            idCE: req.body.idCE,
        }
    );

    nuevaNoticia.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar su noticia, ocurrió el sigiente error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Su noticia ha sido registrada`
                }
            );
        }

    });

};


module.exports.listarNoticiasCE = (req, res) => {
    modeloRegistrarNoticia.find().then(
        noticiasListadasCE => {
            let arregloNoticias = [];

            for (let noticia of noticiasListadasCE) {
                if (noticia.idCE == req.body.idCE) {
                    arregloNoticias.push(noticia);
                }
            }

            // console.log(arregloNoticias);
            // console.log(req.body.idCE);

            if (arregloNoticias.length > 0) {
                res.json(
                    {
                        success: true,
                        notichas: arregloNoticias,

                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        notichas: "No se encontraron noticias",
                    }
                )
            }
        }
    )
};

module.exports.editar = function (req, res) {

    modeloRegistrarNoticia.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo actualizar su noticia' });
            } else {
                res.json({ success: true, msg: 'Su noticia ha sido actualizada' });
            }
        }

    );
}

module.exports.eliminar = function (req, res) {
    modeloRegistrarNoticia.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar su noticia' });
            } else {
                res.json({ success: true, msg: 'Su noticia ha sido eliminada' });
            }
        })
}