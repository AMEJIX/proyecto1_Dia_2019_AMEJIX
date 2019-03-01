'use strict';

let listarLibros = () =>{

};

let registrarLibro = (pisbn, ptitulo, pcategoria, peditorial, pautor, pprecio, pportada) =>{

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_libro",
        method: "POST",
        data: {
            isbn : pisbn,
            titulo : ptitulo,
            categoria: pcategoria,
            editorial: peditorial,
            autor: pautor,
            precio: pprecio,
            portada : pportada
        },
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function( msg ) {

        swal.fire(
            {
            type: 'success',
            title: 'Se registró con éxito el libro',
            text: `El isbn del libro "${ptitulo}" cuya categoría es ${pcategoria}`+
                ` y que pertenece a la editorial ${peditorial} es ${pisbn}, su ` +
                ` autor es ${pautor} y tiene un valor de ${pprecio}`
            }
        );

    });

    request.fail(function( jqXHR, textStatus ) {

    });
};

