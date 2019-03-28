'use strict';

const modeloUtil = require('./utiles.model');

module.exports.registrar = (req, res) =>{
    let nuevoUtil = new modeloUtil({

        nombre : req.body.nombre,
        descripcion : req.body.descripcion,
        cantidad : req.body.cantidad,
        nivel : req.body.nivel,
        idCE : req.body.idCE

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