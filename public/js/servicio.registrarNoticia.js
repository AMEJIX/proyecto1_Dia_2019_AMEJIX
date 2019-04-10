'use strict';

let registrarNoticia = (pstringTituloNoticia, pstringRegistrarNoticia, pstringFechaNoticia, pidCentroEducativo) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrarNoticia",
        method: "POST",
        data: {

            tituloNoticia: pstringTituloNoticia,
            registrarNoticia: pstringRegistrarNoticia,
            fechaNoticia: pstringFechaNoticia,
            idCE: pidCentroEducativo,

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (msg) {

        swal.fire({
            type: 'success',
            title: 'Noticia registrada correctamente',
            text: ``,
        });
    });

    request.fail(function (jqXHR, textStatus) {

    });

};

// let listarNoticias = () => {
//     let listarNoticias = [];
//     let request = $.ajax({
//         url: "http://localhost:4000/api/listar_noticias",
//         method: "GET",
//         data: {
//
//         },
//         contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
//         dataType: "json",
//         async: false,
//     });
//
//     request.done(function (msg) {
//         listarNoticias = msg.registrarNoticia;
//     });
//
//     request.fail(function (jqXHR, textStatus) {
//
//     });
//     return listarNoticias;
// };

let listarNoticias = (idCE) => {
    let listarNoticias = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listarNoticiasCE/" + idCE,
        method: "GET",
        data: {

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false,
    });

    request.done(function (msg) {
        listarNoticias = msg.notichas;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return listarNoticias;
};

let editarMatricula = (pstringTituloNoticia, pstringRegistrarNoticia, pstringFechaNoticia, pidCentroEducativo, p_id) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/editarMatricula',
        method: "POST",
        data: {
            tituloNoticia: pstringTituloNoticia,
            registrarNoticia: pstringRegistrarNoticia,
            fechaNoticia: pstringFechaNoticia,
            idCE: pidCentroEducativo,
            id: p_id
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    request.done(function (res) {

        swal.fire({
            type: 'success',
            title: 'Noticia actualizada',
            text: res.msg,
            onClose: () => {
                window.location.href = 'mostrarNoticias.html';
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

let eliminarNoticia = (p_id) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/eliminarNoticia',
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
            title: 'Noticia eliminada',
            text: res.msg,
            onClose: () => {
                window.location.href = 'mostrarNoticias.html';
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