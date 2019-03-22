'use strict';

let registrarNoticia = (pstringTituloNoticia, pstringRegistrarNoticia, pstringFechaNoticia) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_noticia",
        method: "POST",
        data: {

            tituloNoticia: pstringTituloNoticia,
            registrarNoticia: pstringRegistrarNoticia,
            fechaNoticia: pstringFechaNoticia,

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

let listarNoticias = () => {
    let listarNoticias = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_noticias",
        method: "GET",
        data: {

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false,
    });

    request.done(function (msg) {
        listarNoticias = msg.registrarNoticia;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return listarNoticias;
};