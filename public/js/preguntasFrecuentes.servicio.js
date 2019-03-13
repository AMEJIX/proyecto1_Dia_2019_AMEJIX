'use strict';

let getPreguntasFrecuentes = () =>{
    let lista = [];
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/listarPreguntasFrecuentes",
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

let registrarPreguntaFrecuente = (ppregunta, prespuesta) =>{
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/registrarPreguntaFrecuente",
            method: "POST",
            data: {
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
                text: `La pregunta con su respuesta se ha añadido a su perfil.`
            }
        );
    });

    request.fail(function (jqXHR, textStatus) {

    });
};