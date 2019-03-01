'use strict';
const modelo_sucursal = require('./sucursales.model');

module.exports.registrar = (req, res) =>{
    let nueva_sucursal = new modelo_sucursal(
        {
            codigo : req.body.codigo,
            nombre : req.body.nombre,
            telefono : req.body.telefono,
            direccion_exacta : req.body.direccion_exacta,
            ubicacion : req.body.ubicacion
        }
    );

    nueva_sucursal.save(function (error) {
        if (error){
            res.json(
                {
                    success : false,
                    msg : `No se pudo registrar la editorial. Ocurrió el siguiente error: ${error}`
                }
            );
        } else {
            res.json(
                {
                    success : true,
                    msg : `Se registró correctamente la nueva sucursal`
                }
            );
        }
    });
};

module.exports.listar_todos = (req, res) =>{
    modelo_sucursal.find().sort({nombre: 'asc'}).then(
        function (sucursales) {
            if (sucursales.length > 0){
                res.json(
                    {
                        success: true,
                        sucursales : sucursales
                    }
                );
            } else {
                res.json(
                    {
                        success : false,
                        sucursales : 'No se encontraron sucursales'
                    }
                );
            }
        }
    );
};