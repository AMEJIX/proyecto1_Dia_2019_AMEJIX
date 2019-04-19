'use strict';

let registrarVisita = (fechas, idCE) => {
    let listaCE = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarVisita",
        method: "POST",
        data: {
            fechas: fechas,
            idCE: idCE
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        // async: false
    });

    request.done(function (res) {
        listaCE = res.usuario;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listaCE;
};


let modificarFechaVisita = (id, fechas, idCE) => {
    let listaCE = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/modificarFecha",
        method: "POST",
        data: {
            id: id,
            fechas: fechas,
            idCE: idCE
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        // async: false
    });

    request.done(function (res) {
        listaCE = res.usuario;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listaCE;
};

let obtenerVisita = (idCE) => {
    let objetoVisita;
    let request = $.ajax({
        url: "http://localhost:4000/api/obtenerVisita/" + idCE,
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        objetoVisita = res.visita;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return objetoVisita;
};