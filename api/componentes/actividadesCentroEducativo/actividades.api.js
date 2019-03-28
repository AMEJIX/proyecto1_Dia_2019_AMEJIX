'use strict'

const modeloActividad = require('./actividades.model');

module.exports.registrar = (req, res) =>{
    
    let nuevaActividad = new modeloActividad({

        actividad : req.body.actividad,
        descripcion : req.body.descripcion,
        fecha : req.body.fecha,
        imagen : req.body.imagen,
        idCE : req.body.idCE

    });
    

    nuevaActividad.save(function (error){
        if(error){
            res.json({
                success: false,
                msg: `No se pudo registrar la actividad, ocurrió el siguiente error ${error}`
            });
        }else{
            res.json({
                success: true,
                msg: `La actividad se ha registrado correctamente`
            });
        }
    });
}

module.exports.listarActividades = (req, res)=>{
    
    modeloActividad.find({idCE: req.body.idCE}).then(
        function(actividades){
            if(actividades.length >0){
                res.json(
                    {
                        success: true,
                        actividades: actividades
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        actividades: 'No se encontraron actividades registradas'
                    }
                )
            }
        }
    )
}; 

