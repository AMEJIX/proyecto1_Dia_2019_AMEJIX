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


module.exports.buscarCriterio = function (req, res){
    modeloCriterio.find({_id : req.body._id}).then(
        function(criterio){
            if(criterio){
                res.json({success: true, criterio : criterio});
            }else{
                res.json({success: false, criterio : criterio});
            }
        }

    );

};


module.exports.actualizar = function(req, res){
   
    modeloCriterio.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar el criterio'});
            }else{
                res.json({success: true , msg : 'El criterio se actualizó con éxito'});
            }
        }
    
    );
}

module.exports.eliminar = function(req, res){
    modeloCriterio.findByIdAndDelete(req.body.id,
        function(error){
            if(error){
                res.json({success : false , msg : 'No se pudo eliminar el criterio'});
            }else{
                res.json({success: true , msg : 'El criterio se eliminó con éxito'});
            }
        })
}

