'use strict';

const modeloBitacora = require('./usuarios.model');



module.exports.registrarBitacora = (req, res) => {


    let nuevaBitacora = new modeloBitacora(

        {

            usuario: {},
            tipoDeMovimiento: {},
            fecha: {}
        }

    );

    nuevaBitacora.save(function (error){
        if (error) {
            res.json({

                success: false,
                msj: 'movimiento no se pudo registrar en bitacora' + erro,
            })
        } else {

            res.json(
                {

                    success: true,
                    msj: 'Se registro el movimiento en la bitacora'

                }
            )
        }
    })
}

module.exports.listarBitacora = (req, res) => {
    modeloBitacora.find({}).then().then(
        function(bitacora) {
            if (bitacora.length > 0) {
                res.json({
                    success: true,
                   
                })
            } else {
                res.json({
                    success: false,
                    usuario: 'No se encontraron movimientos.'
                })
            }
        }
    )
}