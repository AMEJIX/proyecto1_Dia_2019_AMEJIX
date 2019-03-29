'use strict';

const modeloRegistrarMatriculaCostos = require('./registrarMatriculaCostos.model');

module.exports.registrar = (req, res) => {
    let nuevaMatricula = new modeloRegistrarMatriculaCostos(
        {
            matricula: req.body.matricula,
            mensualidad: req.body.mensualidad,
            fieldsetPrecio: req.body.fieldsetPrecio,
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

module.exports.listarMatriculasCE = (req, res) => {
    modeloRegistrarMatriculaCostos.find().then(
        matriculasListadasCE => {
            let arregloMatriculas = [];

            for (let matriculitas of matriculasListadasCE) {
                if (matriculitas.idCE == req.body.idCE){
                    arregloMatriculas.push(matriculitas)
                }
      S      }

            console.log(arregloMatriculas);
            console.log(req.body.idCE);

            if (arregloMatriculas.length > 0) {
                res.json(
                    {
                        success: true,
                        matriculo: arregloMatriculas,

                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        matriculo: "No se encontraron matrículas registradas"
                    }
                )
            }
        }
    )
};