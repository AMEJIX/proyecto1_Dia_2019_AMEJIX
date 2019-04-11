'use strict';

const modeloMatriculas = require('./matriculaCostos.model');

module.exports.registrar = (req, res) => {
    let nuevaMatricula = new modeloMatriculas(
        {
            matricula: req.body.matricula,
            mensualidad: req.body.mensualidad,
            moneda: req.body.moneda,
            idCE: req.body.idCE,
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

/**************************************************************************************************************/

module.exports.validarCostosMatricula = () => {
    modeloMatriculas.findOne({ idCE: req.body.idCE }).then(
        usuario => {
            if (usuario) {
                respuesta.json(
                    {
                        tieneInfo: true,
                        info: usuario
                    }
                );
            } else {
                res.json(
                    {
                        tieneInfo: false
                    }
                );
            }
        }
    );
};

/**************************************************************************************************************/

module.exports.listarMatriculasCE = (req, res) => {
    modeloMatriculas.find().then(
        matriculasListadasCE => {
            console.log(matriculasListadasCE);

            let infoCostosMatricula;

            for (let matricula of matriculasListadasCE) {
                if (matricula.idCE == req.body.idCE) {
                    infoCostosMatricula = matricula;
                }
            }

            console.log(infoCostosMatricula);
            console.log(req.body.idCE);

            if (infoCostosMatricula) {
                res.json(
                    {
                        success: true,
                        matricula: infoCostosMatricula,

                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        matricula: "No se encontraron los costos de matrícula"
                    }
                )
            }
        }
    )
};