'use strict';
const modeloRango = require('../rangosMEP/rangos.model');

module.exports.registrarElRango = (req, res) =>{
    let nuevoRango = new modeloRango({

        rango : req.body.rango,
        valorMinimo : req.body.valorMinimo,
        valorMaximo : req.body.valorMaximo,
        estrellas : req.body.estrellas
        
    });

    nuevoRango.save(function(error){
        if(error){
            res.json({
                success: false,
                msg: `No se pudo registrar el rango, ocurrió el siguiente error ${error}`
            }
            );
        }else{
            res.json({
                success : true,
                msg : `El rango se ha registrado correctamente`
            });
        }

    });
}


module.exports.listarLosRangos = (req, res)=>{
    
    modeloRango.find().sort({rango: 'asc'}).then(
        function(rangos){
            if(rangos.length >0){
                res.json(
                    {
                        success: true,
                        rangos: rangos
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        rangos: 'No se encontraron rangos registrados'
                    }
                )
            }
        }
    )
}; 