'use strict';

const modelo_editorial = require('./editoriales.model');

module.exports.registrar = (req, res) =>{
    let nueva_editorial = new modelo_editorial(
        {
            codigo : req.body.codigo,
            nombre : req.body.nombre,
            pais : req.body.pais
        }
    );

    nueva_editorial.save(function (error) {
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
                    success: true,
                    msg: `Se registró la editorial correctamente`
                }
            );
        }
    });
};

module.exports.listar_todos = (req, res) =>{
    modelo_editorial.find().sort({nombre: 'asc'}).then(
        function (editoriales) {
            if (editoriales.length > 0){
                res.json(
                    {
                        success: true,
                        editoriales: editoriales
                    }
                );
            } else {
                res.json(
                    {
                        success: false,
                        editoriales: `No se encontraron editoriales`
                    }
                );
            }
        }
    );
};