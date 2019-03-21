'use strict';

const modeloPreguntasFrecuentes = require('./preguntasFrecuentes.model');

module.exports.registrarPreguntaFrecuente = (req, res) =>{
    let nuevaPreguntaFrecuente = new modeloPreguntasFrecuentes(
        {
            pregunta: req.body.pregunta,
            respuesta: req.body.respuesta
        }
    );

    nuevaPreguntaFrecuente.save(function (error) {
        if (error){
            res.json(
                {
                    success: false,
                    msg: `No se registró la pregunta frecuente. Ocurrió el siguiente error: ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `Se registró la pregunta frecuente exitosamente`
                }
            );
        }
    });
};


module.exports.listarPreguntasFrecuentes = (req, res) =>{
    modeloPreguntasFrecuentes.find().sort({pregunta: 'asc'}).then(
        function (preguntasFrecuentes) {
            if (preguntasFrecuentes.length > 0){
                res.json(
                    {
                        success: true,
                        preguntasFrecuentes: preguntasFrecuentes
                    }
                );
            } else {
                res.json(
                    {
                        success: false,
                        preguntasFrecuentes: 'No se encontraron preguntas frecuentes'
                    }
                );
            }
        }
    );
};