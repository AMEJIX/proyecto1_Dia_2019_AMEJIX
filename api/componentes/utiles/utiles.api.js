'use strict';

const modeloUtil = require('./utiles.model');

module.exports.registrar = (req, res) =>{
    let nuevoUtil = new modeloUtil({

        nombre : req.body.nombre,
        descripcion : req.body.descripcion,
        cantidad : req.body.cantidad,
        nivel : req.body.nivel,
        idCE : req.body.idCE,
        nombreLista : req.body.nombreLista

    });

    nuevoUtil.save(function(error){
        if(error){
            res.json({
                success: false,
                msg: `No se pudo registrar el útil escolar, ocurrió el siguiente error ${error}`
            }
            );
        }else{
            res.json({
                success : true,
                msg : `El útil escolar se ha registrado correctamente`
            });
        }

    });
}

module.exports.listarUtilNivel = (req, res)=>{
    
    // let filtro;

    // if(req.body.idCE == ""){
    //     filtro = {nivel: req.body.nivel};
    // }
    
    modeloUtil.find({nivel: req.body.nivel, idCE: req.body.idCE}).then(
        function(utiles){
            if(utiles.length >0){
                res.json(
                    {
                        success: true,
                        utiles: utiles
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        utiles: 'No se encontraron útiles escolares registrados'
                    }
                )
            }
        }
    )
};



module.exports.listarUtilNivelPropio = (req, res)=>{    
    
    modeloUtil.find({nivel: req.body.nivel, idCE: req.body.idCE, nombreLista: req.body.nombreLista}).then(
        function(utiles){
            if(utiles.length >0){
                res.json(
                    {
                        success: true,
                        utiles: utiles
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        utiles: 'No se encontraron útiles escolares registrados'
                    }
                )
            }
        }
    )
};



module.exports.listarTodos = (req, res)=>{
    
    modeloUtil.find().then(
        function(utiles){
            if(utiles.length >0){
                res.json(
                    {
                        success: true,
                        utiles: utiles
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        utiles: 'No se encontraron útiles escolares registrados'
                    }
                )
            }
        }
    )
}; 



//segunda iteracion

module.exports.buscarUtilIndividual = function (req, res){
    modeloUtil.find({_id: req.body._id}).then(
        function(utiles){
            if(utiles){
                res.json({success: true, utiles : utiles});
            }else{
                res.json({success: false, utiles : utiles});
            }
        }

    );
}



module.exports.actualizarUtil = function(req, res){
   
    modeloUtil.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar el útil escolar'});
            }else{
                res.json({success: true , msg : 'El útil escolar se actualizó con éxito'});
            }
        }
    
    );
}

module.exports.eliminarUtil = function(req, res){
    modeloUtil.findByIdAndDelete(req.body.id,
        function(error){
            if(error){
                res.json({success : false , msg : 'No se pudo eliminar el útil escolar'});
            }else{
                res.json({success: true , msg : 'El útil escolar se eliminó con éxito'});
            }
        })
}
module.exports.eliminarLista = function(req, res){
    modeloUtil.remove({nombreLista : req.body.nombreLista},
        function(error){
            if(error){
                res.json({success : false , msg : 'No se pudo eliminar la lista de útiles'});
            }else{
                res.json({success: true , msg : 'La lista de útiles se eliminó con éxito'});
            }
        }
        )
        // function(error){
        //     if(error){
        //         res.json({success : false , msg : 'No se pudo eliminar la lista de útiles'});
        //     }else{
        //         res.json({success: true , msg : 'La lista de útiles se eliminó con éxito'});
        //     }
        // })

        // modeloUtil.findOneAndDelete(req.body.nombreLista,
        //     function(error){
        //         if(error){
        //             res.json({success : false , msg : 'No se pudo eliminar la lista de útiles'});
        //         }else{
        //             res.json({success: true , msg : 'La lista de útiles se eliminó con éxito'});
        //         }
        //     })
}
