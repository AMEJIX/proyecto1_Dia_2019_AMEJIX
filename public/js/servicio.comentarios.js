'use strict';

let registrarComentario = (pcomment, pIdCentro) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarComentario",
        method: "POST",
        data: {
            // pstars: pstars,
            pcomment: pcomment,
            idCE: pIdCentro
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'El comentario se ha registrado correctamente.',
            text: `Se registró correctamente.`
        });
    });

    request.fail(function (jqXHR, textStatus) {

    });
};

let listarComentariosUser = (idCE) => {
    let listaComentariosUser = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/centroEducativo/listarComentarioUsuario/" + idCE,
        method: "GET",
        data: {},
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listaComentariosUser = res.comentario;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listaComentariosUser;
};

let eliminarComentario = (p_id) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/eliminarComentario',
        method: "POST",
        data: {
            id: p_id
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    request.done(function (res) {

        swal.fire({
            type: 'success',
            title: 'Comentario eliminado con éxito',
            text: res.msg,
            onClose: () => {
                window.location.href = 'profileInfoCE.html';
            }
        });

    });

    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Proceso no realizado',
            text: res.msg
        });

    });

};