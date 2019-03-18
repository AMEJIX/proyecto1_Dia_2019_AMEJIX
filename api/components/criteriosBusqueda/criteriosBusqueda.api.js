'use strict';

const modeloCriteriosBusqueda = require('./criteriosBusqueda.model');

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