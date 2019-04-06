'use strict';

let registrarIdiomas = (parametrosIdioma) => { 
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarIdiomas",
        method: "POST",
        data: {

            idiomas: parametrosIdioma,

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false,
    });

    request.done(function (msg) {

        swal.fire({
            type: 'success',
            title: 'Idioma registrado correctamente',
            text: ``
        });
    });

    request.fail(function (jqXHR, textStatus) {

    });
}

let listarIdiomas = () => {
    let arregloDeIdiomas = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listarIdiomas",
        method: "GET",
        data: {

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false,
    });

    request.done(function (msg) {
        arregloDeIdiomas = msg.idiomas;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return arregloDeIdiomas;
};