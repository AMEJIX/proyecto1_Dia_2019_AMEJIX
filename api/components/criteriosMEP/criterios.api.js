'use strict';
 const modeloCriterio = require('./criterios.model');
 
 module.exports.registrarElCriterio = (req, res) =>{
    let nuevoCriterio = new modeloCriterio({

        criterio : req.body.criterio,
        descripcion : req.body.descripcion,
        puntaje : req.body.puntaje
        
    });

        nuevoCriterio.save(function (error){
            if (error) {
                res.json({
                    success: false,
                    msg: `No se pudo registrar el criterio, ocurrió el siguiente error ${error}`
                });
            }else{
                res.json({
                    success: true,
                    msg: `El criterio se ha registrado correctamente`
                });
            }

        });
  
}



module.exports.listarLosCriterios = (req, res)=>{
    modeloCriterio.find().sort({criterio: 'asc'}).then(
        function(criterios){
            if(criterios.length >0){
                res.json(
                    {
                        success: true,
                        criterios: criterios
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        criterios: 'No se encontraron criterios registrados'
                    }
                )
            }
        }
    )
}; 

