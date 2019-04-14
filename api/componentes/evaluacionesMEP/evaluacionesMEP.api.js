'use strict';

const modeloCE = require('../usuarios/usuarios.model');
const modeloEvaluacionesCE = require('./evaluacionesMEP.model');

 
 module.exports.registrarEvaluacionMEP = (req, res) =>{
    let nuevaEvaluacion = new modeloEvaluacionesCE({

        nombre : req.body.nombre,
        total : req.body.total,
        estrellas : req.body.estrellas,
        anno : req.body.anno,
        idCE: req.body.idCE,
        tipo: req.body.tipo,
        imagen: req.body.imagen,
        posicion: req.body.posicion
        
    });
        nuevaEvaluacion.save(function (error){
            if (error) {
                res.json({
                    success: false,
                    msg: `No se pudo registrar la evaluación, ocurrió el siguiente error ${error}`
                });
            }else{
                res.json({
                    success: true,
                    msg: `La evaluación se ha registrado correctamente`
                });
            }

        });
  
}



module.exports.listarCEEvaluados = (req, res)=>{        
    modeloEvaluacionesCE.find({anno: req.body.anno, idCE: req.body.idCE}).then(
        function(centrosEducativosEvaluados){
            if(centrosEducativosEvaluados.length >0){
                res.json(
                    {
                        success: true,
                        centrosEducativosEvaluados: centrosEducativosEvaluados
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        centrosEducativosEvaluados: 'No se encontraron centros educativos registrados'
                    }
                )
            }
        }
    )
}; 




module.exports.listarCE = (req, res)=>{        
    modeloCE.find({userType: 'centroEducativo'}).then(
        function(centrosEducativos){
            if(centrosEducativos.length >0){
                res.json(
                    {
                        success: true,
                        centrosEducativos: centrosEducativos
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        centrosEducativos: 'No se encontraron centros educativos registrados'
                    }
                )
            }
        }
    )
}; 



module.exports.listarCEEvaluadosTop = (req, res)=>{        
    modeloEvaluacionesCE.find({anno: req.body.anno}).sort({total: -1}).then(
        function(centrosEducativosEvaluados){
            if(centrosEducativosEvaluados.length >0){
                res.json(
                    {
                        success: true,
                        centrosEducativosEvaluados: centrosEducativosEvaluados
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        centrosEducativosEvaluados: 'No se encontraron centros educativos registrados'
                    }
                )
            }
        }
    )
}; 



module.exports.listarTodosCEEvaluados = (req, res) => {
    modeloEvaluacionesCE.find().then(
        function (centrosEducativos){
            if(centrosEducativos.length > 0){
                res.json({
                    success: true,
                    centrosEducativos: centrosEducativos
                    
                })
            } else {
                res.json({
                    success: false,
                    centrosEducativos: `No se encontraron centros evaluados`
                })
            }
        }
    )
}


