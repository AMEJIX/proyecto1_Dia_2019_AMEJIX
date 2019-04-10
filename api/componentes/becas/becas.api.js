'use strict';

const modeloBeca = require('./becas.model');

module.exports.registrar = (req, res) => {

    let nuevaBeca = new modeloBeca(
        {
            nombreBeca: req.body.nombreBeca,
            descripcionBeca: req.body.descripcionBeca,
            idCE: req.body.idCE,
        }
    );
    nuevaBeca.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msg: `No se pudo registrar su beca, ocurrió el sigiente error ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Su beca ha sido registrada`
                }
            );
        }

    });

};

module.exports.listarBecas = (req, res) => {

    modeloBeca.find().then(
        function (registrarBeca) {

            if (registrarBeca.length > 0) {
                res.json(
                    {
                        success: true,
                        registrarBeca: registrarBeca,
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        registrarBeca: "No se encontraron becas",
                    }
                )
            }
        }
    )

};

module.exports.listarBecasCE = (req, res) => {
    modeloBeca.find().then(
        becasListadasCE => {
            let arregloBecas = [];

            for (let bequitas of becasListadasCE) {
                if (bequitas.idCE == req.body.idCE) {
                    arregloBecas.push(bequitas);
                }
            }
            // console.log(arregloBecas);
            console.log(req.body.idCE);

            if (arregloBecas.length > 0) {
                res.json(
                    {
                        success: true,
                        becas: arregloBecas,
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        becas: "No se encontraron becas"
                    }
                )
            }
        }
    )
};

module.exports.editar = function (req, res) {

    modeloBeca.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo actualizar su beca' });
            } else {
                res.json({ success: true, msg: 'Su beca ha sido actualizada' });
            }
        }

    );
}

module.exports.eliminar = function (req, res) {
    modeloBeca.findByIdAndDelete(req.body.id,
        function (error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar su beca' });
            } else {
                res.json({ success: true, msg: 'Su beca ha sido eliminada' });
            }
        })
}