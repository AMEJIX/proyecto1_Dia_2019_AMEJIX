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

module.exports.buscarArticulo = function (req, res){
    modeloArticulo.find({_id : req.body._id}).then(
        function(articulo){
            if(articulo){
                res.json({success: true, articulo : articulo});
            }else{
                res.json({success: false, articulo : articulo});
            }
        }

    );

};


module.exports.actualizar = function(req, res){
   
    modeloArticulo.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar el artículo'});
            }else{
                res.json({success: true , msg : 'El artículo se actualizó con éxito'});
            }
        }
    
    );
}

module.exports.eliminar = function(req, res){
    modeloArticulo.findByIdAndDelete(req.body.id,
        function(error){
            if(error){
                res.json({success : false , msg : 'No se pudo eliminar el artículo'});
            }else{
                res.json({success: true , msg : 'El artículo se eliminó con éxito'});
            }
        })
}




