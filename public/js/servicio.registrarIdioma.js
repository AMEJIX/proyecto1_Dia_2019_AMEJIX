'use strict';

let registrarIdiomas = (parametrosIdioma, pidCentroEducativo) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarIdiomas",
        method: "POST",
        data: {

            idiomas: parametrosIdioma,
            idCE: pidCentroEducativo,

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

let buscarIdioma = (_id) => {
    let idioma = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscarIdioma/" + _id,
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        idioma = res.idioma;

    });

    request.fail(function (jqXHR, textStatus) {

    });
    return idioma;

};

let listarIdiomas = (idCE) => {
    let listarIdiomas = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listarIdiomasCE/" + idCE,
        method: "GET",
        data: {

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false,
    });

    request.done(function (msg) {
        listarIdiomas = msg.idiomas;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return listarIdiomas;
};

let editarIdioma = (parametrosIdioma, pidCentroEducativo, p_id) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/editarMaterial',
        method: "POST",
        data: {
            idiomas: parametrosIdioma,
            idCE: pidCentroEducativo,
            id: p_id
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    request.done(function (res) {

        swal.fire({
            type: 'success',
            title: 'Idioma actualizado',
            text: res.msg,
            onClose: () => {
                window.location.href = 'mostrarIdiomas.html';
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

let eliminarIdioma = (p_id) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/eliminarIdioma',
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
            title: 'Idioma eliminado',
            text: res.msg,
            onClose: () => {
                window.location.href = 'mostrarIdiomas.html';
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