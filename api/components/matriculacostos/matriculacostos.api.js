'use strict';

const modeloRegistrarMatriculaCostos = require('./matriculacostos.model');

module.exports.registrar = (req, res) => {
    let nuevaMatricula = new modeloRegistrarMatriculaCostos(
        {
            nombre: req.body.nombre,
            precio: req.body.precio,
            fieldsetPrecio: req.body.fieldsetPrecio,
        }
    );

    nuevaMatricula.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `Su matrícula no pudo ser registrada, ocurrió el sigiente error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Su matrícula ha sido registrada`
                }
            );
        }

    });

};

module.exports.listarMatriculas = (req, res) => {

    modeloRegistrarMatriculaCostos.find().then(
        function (registrarMatricula) {

            if (registrarMatricula.length > 0) {
                res.json(
                    {
                        success: true,
                        registrarMatricula: registrarMatricula,
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        registrarMatricula: "No se encontraron matrículas",
                    }
                )
            }
        }
    )

};