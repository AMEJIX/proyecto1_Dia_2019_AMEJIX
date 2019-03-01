'use strict';

const modelo_libros = require('./libros.model');

module.exports.registrar = (req, res) =>{
    let nuevo_libro = new modelo_libros(
        {
            isbn : req.body.isbn,
            titulo : req.body.titulo,
            categoria: req.body.categoria,
            editorial: req.body.editorial,
            autor: req.body.autor,
            precio: req.body.precio,
            portada : req.body.portada
        }
    );

     nuevo_libro.save(function (error) {
         if (error){
             res.json(
                 {
                     success : false,
                     msg : `No se pudo registrar el libro. Ocurrió el siguiente error: ${error}`
                 }
             );
         } else {
             res.json(
                 {
                     success : true,
                     msg : `Se registró el libro correctamente`
                 }
             );
         }
     });
};

module.exports.listar_todos = (req, res) =>{
    modelo_libros.find().sort({titulo: 'asc'}).then(
        function (libros) {
            if (libros.length > 0){
                res.json(
                    {
                        success: true,
                        libros : libros
                    }
                );
            } else {
                res.json(
                    {
                        success : false,
                        libros : 'No se encontraron libros'
                    }
                );
            }
        }
    );
};