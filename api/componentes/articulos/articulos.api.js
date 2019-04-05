'use strict';

const modeloArticulo = require('./articulos.model');

module.exports.registrar = (req, res) =>{
    let nuevoArticulo = new modeloArticulo({
        nombre : req.body.nombre,
        descripcion : req.body.descripcion,       
        idCE : req.body.idCE
    });

    nuevoArticulo.save(function(error){
        if(error){
            res.json({
                success: false,
                msg: `No se pudo registrar el artículo escolar, ocurrió el siguiente error ${error}`
            }
            );
        }else{
            res.json({
                success : true,
                msg : `El artículo escolar se ha registrado correctamente`
            });
        }

    });
}

module.exports.listarArticulo = (req, res)=>{
    
    modeloArticulo.find({idCE: req.body.idCE}).then(
        function(articulos){
            if(articulos.length >0){
                res.json(
                    {
                        success: true,
                        articulos: articulos
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        articulos: 'No se encontraron artículos escolares registrados'
                    }
                )
            }
        }
    )
};

