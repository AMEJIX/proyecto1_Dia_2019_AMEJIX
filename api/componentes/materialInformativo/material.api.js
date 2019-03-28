'use strict';

const materialModel = require('./material.model');

module.exports.registrar = (req, res) => {
    let nuevoMaterial = new materialModel(
        {
            tema: req.body.tema,
            descripcion: req.body.descripcion,
            file: req.body.file,
            idCE: req.body.idCE
        }
    );

    nuevoMaterial.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `El material informativo no pudo ser registrado ${error}.`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `El material informativo se ha registrado correctamente.`
                }
            );
        }
    });
};

module.exports.listarMaterial = (req, res) => {
    materialModel.find().then(
        function (material) {
            if (material.length > 0) {
                res.json({
                    success: true,
                    material: material
                })
            } else {
                res.json({
                    success: false,
                    material: 'No se encontraron materiales informativos registrados'
                })
            }
        }
    )
};