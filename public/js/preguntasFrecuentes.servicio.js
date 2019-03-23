'use strict';

let validarPregunta = (pregunta) =>{
    let lista = [];
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/validarNuevaPregunta",
            method: "GET",
            data: {pregunta: pregunta},
            contentType:  'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json",
            async: false
        }
    );

    request.done(function (res) {
        lista = res.success;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return lista;
};

let getPreguntasFrecuentes = (idCE) =>{
    let lista = [];
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/centroEducativo/listarPreguntasFrecuentes/" + idCE,
            method: "GET",
            data: {},
            contentType:  'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json",
            async: false
        }
    );

    request.done(function (res) {
        lista = res.preguntasFrecuentes;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return lista;
};

let registrarPreguntaFrecuente = (idCE, ppregunta, prespuesta) =>{
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/registrarPreguntaFrecuente",
            method: "POST",
            data: {
                idCE: idCE,
                pregunta: ppregunta,
                respuesta: prespuesta
            },
            contentType:  'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json"
        }
    );

    request.done(function (msg) {
        swal.fire(
            {
                type: 'success',
                title: 'Se registró correctamente la pregunta frecuente',
                text: `La pregunta con su respuesta se ha añadido a su perfil.`,
                showConfirmButton: false,
                timer: 1500
            }
        );
    });

    request.fail(function (jqXHR, textStatus) {

    });
};