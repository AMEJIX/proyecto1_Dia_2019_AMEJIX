'use strict';

const modeloIdiomas = require('./idiomas.model');

module.exports.registrar = (req, res) => {
    let nuevoIdioma = new modeloIdiomas(
        {
            idiomas: req.body.idiomas,
        }
    );

    nuevoIdioma.save(function (error) {
        if (error) {
            res.json(
                {
                    succes: false,
                    msg: `Negativo`,
                }
            );
        } else {
            res.json(
                {
                    succes: true,
                    msg: `Afirmativo`,
                }
            );
        }
    });
}

module.exports.listar = (req, res) => {

    modeloIdiomas.find().then(
        function (registrarIdiomas) {

            if (registrarIdiomas.length > 0) {
                res.json(
                    {
                        success: true,
                        idiomas: registrarIdiomas,
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        idiomas: "No se encontraron idiomas",
                    }
                )
            }
        }
    )

};