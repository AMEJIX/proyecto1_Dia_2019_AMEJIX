'use strict';

const modeloCriteriosBusqueda = require('./criteriosBusqueda.model');

module.exports.validarEtiqueta = (req, res) =>{

    modeloCriteriosBusqueda.find().sort({pregunta: 'asc'}).then(
        function (criteriosBusqueda) {
            if (criteriosBusqueda.length > 0){
                let existe = false;

                for (let etiqueta of criteriosBusqueda){
                    if (etiqueta.nombre.toLowerCase() == req.body.nombre.toLowerCase()){
                        existe = true;
                    }
                }
                // console.log(preguntasFrecuentes);
                // console.log(req.body.pregunta);
                // console.log(existe);
                if (existe){
                    res.json(
                        {
                            success: true,
                            msg: 'Ya existe la etiqueta'
                        }
                    );
                } else {
                    res.json(
                        {
                            success: false,
                            msg: 'No existe la etiqueta'
                        }
                    );
                }
            } else {
                res.json(
                    {
                        success: false,
                        preguntasFrecuentes: 'No hay preguntas aún'
                    }
                );
            }
        }
    );
};

module.exports.registrarCriterioBusqueda = (req, res) =>{
    let nuevoCriterioBusqueda = new modeloCriteriosBusqueda(
        {
            nombre: req.body.nombre
        }
    );

    nuevoCriterioBusqueda.save(function (error) {
        if (error){
            res.json(
                {
                    success: false,
                    msg: `Falló el registro. Ocurrió el siguiente error: ${error}`
                }
            );
        } else {
            res.json(
                {
                    success: true,
                    msg: `El registro del criterio de búsqueda fue exitoso`
                }
            );
        }
    });
};

module.exports.listarCriteriosBusqueda = (req, res) =>{
    modeloCriteriosBusqueda.find().sort({nombre: 'asc'}).then(
        function (criteriosBusqueda) {
            if (criteriosBusqueda.length > 0){
                res.json(
                    {
                        success: true,
                        criteriosBusqueda: criteriosBusqueda
                    }
                );
            } else {
                res.json(
                    {
                        success: false,
                        msg: 'No se encontró ningún criterio de búsqueda'
                    }
                );
            }
        }
    );
};

module.exports.getEtiqueta = (req, res) =>{
    modeloCriteriosBusqueda.findOne({nombre: req.body.id}).then(
        function (etiqueta) {
            if (etiqueta){
                res.json(
                    {
                        success: true,
                        etiqueta: etiqueta
                    }
                );
            } else {
                res.json(
                    {
                        success: false,
                        etiqueta: 'No se encontró la etiqueta'
                    }
                );
            }
        }
    );
};

module.exports.actualizar = (req, res) =>{
    modeloCriteriosBusqueda.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar la etiqueta'});
            }else{
                res.json({success: true , msg : 'La etiqueta se actualizó con éxito'});
            }
        }

    );
};

module.exports.eliminar = (req, res) =>{
    modeloCriteriosBusqueda.findByIdAndDelete(req.body.id,
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo eliminar la etiqueta'});
            }else{
                res.json({success: true , msg : 'La etiqueta se eliminó con éxito'});
            }
        }
    );
};