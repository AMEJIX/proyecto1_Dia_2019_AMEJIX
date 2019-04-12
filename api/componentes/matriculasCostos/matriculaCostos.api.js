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

module.exports.listar = (req, res) => {

    modeloMatriculas.find().then(
        function (registrarMatricula) {

            if (registrarMatricula.length > 0) {
                res.json(
                    {
                        success: true,
                        matriculas: registrarMatricula,
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        matriculas: "No se encontraron matrículas",
                    }
                )
            }
        }
    )

};

/**************************************************************************************************************/

module.exports.listarMatriculasCE = (req, res) => {
    modeloMatriculas.find().then(
        matriculasListadasCE => {
            let arregloMatriculas = [];

            for (let matricula of matriculasListadasCE) {
                if (matricula.idCE == req.body.idCE) {
                    arregloMatriculas = push(matricula);
                }
            }

            console.log(arregloMatriculas);
            console.log(req.body.idCE);

            if (arregloMatriculas.length > 0) {
                res.json(
                    {
                        success: true,
                        matricula: arregloMatriculas,

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

module.exports.editar = function (req, res) {

    modeloMatriculas.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'Su matrícula no ha sido eliminada' });
            } else {
                res.json({ success: true, msg: 'Su matrícula ha sido eliminada' });
            }
        }

    );

}

/**************************************************************************************************************/

module.exports.eliminar = function (req, res) {
    modeloMatriculas.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'Su matrícula no ha sido eliminada' });
            } else {
                res.json({ success: true, msg: 'Su matrícula ha sido eliminada' });
            }
        })
}