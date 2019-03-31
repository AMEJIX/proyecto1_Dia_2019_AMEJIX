'use strict';

const modeloPreguntasFrecuentes = require('./preguntasFrecuentes.model');

module.exports.validarNuevaPregunta = (req, res) =>{

    modeloPreguntasFrecuentes.find().sort({pregunta: 'asc'}).then(
        function (preguntasFrecuentes) {
            if (preguntasFrecuentes.length > 0){
                let existe = false;

                for (let preguntaFrecuente of preguntasFrecuentes){
                    if (preguntaFrecuente.pregunta.toLowerCase() == req.body.pregunta.toLowerCase()){
                        existe = true;
                    }
                }
                // console.log(preguntasFrecuentes);
                // console.log(req.body.pregunta);
                // console.log(existe);
                if (existe){
                    res.json(
                        {
                            success: true,
                            msg: 'Ya existe la pregunta'
                        }
                    );
                } else {
                    res.json(
                        {
                            success: false,
                            msg: 'No existe la pregunta'
                        }
                    );
                }
            } else {
                res.json(
                    {
                        success: false,
                        preguntasFrecuentes: 'No hay preguntas aún'
                    }
                );
            }
        }
    );
};

module.exports.registrarPreguntaFrecuente = (req, res) =>{
    let nuevaPreguntaFrecuente = new modeloPreguntasFrecuentes(
        {
            idCE: req.body.idCE,
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
        preguntasFrecuentes =>{

            let preguntasFrecuentesCE = [];

            for (let pregFrec of preguntasFrecuentes){
                if (pregFrec.idCE === req.body.idCE){
                    preguntasFrecuentesCE.push(pregFrec);
                }
            }

            console.log("Id del centro recibido: " + req.body.idCE);
            console.log(preguntasFrecuentesCE);

            if (preguntasFrecuentesCE.length > 0 && req.body.idCE !== undefined){

                res.json(
                    {
                        success: true,
                        preguntasFrecuentes: preguntasFrecuentesCE
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

/*
module.exports.listarPreguntasFrecuentesPorPerfil = (req, res) =>{
    modeloPreguntasFrecuentes.find().sort({pregunta: 'asc'}).then(
        preguntasFrecuentes =>{

            let preguntasFrecuentesCE = [];

            for (let pregFrec of preguntasFrecuentes){
                if (pregFrec.idCE === req.body.idCE){
                    preguntasFrecuentesCE.push(pregFrec);
                }
            }

            console.log("Id del centro recibido: " + req.body.idCE);
            // console.log(preguntasFrecuentesCE);

            if (preguntasFrecuentes.length > 0 && req.body.idCE !== undefined){

                res.json(
                    {
                        success: true,
                        preguntasFrecuentes: preguntasFrecuentesCE
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
};*/
// module.exports.listarPreguntasFrecuentesPF = (req, res) =>{
//     modeloPreguntasFrecuentes.find().sort({pregunta: 'asc'}).then(
//          preguntasFrecuentes =>{
//             if (preguntasFrecuentes.length > 0){
//
//                 let preguntasFrecuentesCE = [];
//
//                 for (let pregFrec of preguntasFrecuentes){
//                     if (pregFrec.idCE === req.body.idCE){
//                         preguntasFrecuentesCE.push(pregFrec);
//                     }
//                 }
//
//                 res.json(
//                     {
//                         success: true,
//                         preguntasFrecuentes: preguntasFrecuentes
//                     }
//                 );
//             } else {
//                 res.json(
//                     {
//                         success: false,
//                         preguntasFrecuentes: 'No se encontraron preguntas frecuentes'
//                     }
//                 );
//             }
//         }
//     );
// };
