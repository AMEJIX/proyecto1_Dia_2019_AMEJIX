'use strict'

const modeloSolicitud = require('./solicitudes.model');

module.exports.registrarSolicitudes = (req, res) => {

    let nuevaSolicitud = new modeloSolicitud(
        {
            usuario: {},
            estado: {},
            fecha: {}
        }
    );


    nuevaSolicitud.save(function (error){
        if(error) {
            res.json({
                
                success: false,
                msj: 'no se pudo registrar la solicitud'
            })
        } else {
            res.json(
                {
                    success: true,
                    msj: 'Se registro la solicitud'
                }
            )
        }
    })


}

module.exports.listarSolicitudes = (req, res) => {
    modeloSolicitud.find().then(
        function(solicitud) {
            if (solicitud.length > 0) {
                res.json({
                    success: true,
                    solicitud: solicitud
                })
            } else {
                res.json({
                    success: false,
                    solicitud: 'No se pudo encontrear solicitudes'
                })
            }
        }
    )
}