'use strict';

let registrarMatricula = (pstringPrecioMatricula, pnumberPrecioMensualidad, pfieldsetNumberPrecioMatricula, pidCentroEducativo) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrarMatricula",
        method: "POST",
        data: {

            matricula: pstringPrecioMatricula,
            mensualidad: pnumberPrecioMensualidad,
            moneda: pfieldsetNumberPrecioMatricula,
            idCE: pidCentroEducativo,

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false,
    });
    request.done(function (msg) {

        swal.fire({
            type: 'success',
            title: 'Su matrícula ha sido registrada',
            text: ``
        });
    });
    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'Su matrícula no ha sido registrada',
            text: '',
        });
    });
};

/**************************************************************************************************************/

let listarMatriculas = (idCE) => {
    let listaMatriculas = '';
    let request = $.ajax({
        url: "http://localhost:4000/api/listarMatriculasCE/" + idCE,
        method: "GET",
        data: {

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false,
    });
    request.done(function (msg) {
        listaMatriculas = msg.matricula;
    });
    request.fail(function (jqXHR, textStatus) {
    });
    return listaMatriculas;
};

/**************************************************************************************************************/

let buscarMatricula = (_id) => {
    let matricula = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/buscarMatricula/" + _id,
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false,
    });
    request.done(function (res) {
        matricula = res.matricula;
    });
    request.fail(function (jqXHR, textStatus) {
    });
    return matricula;
};

/**************************************************************************************************************/

let editarMatricula = (pstringPrecioMatricula, pnumberPrecioMensualidad, pfieldsetNumberPrecioMatricula, pidCentroEducativo, p_id) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/editarMatricula',
        method: "POST",
        data: {

            matricula: pstringPrecioMatricula,
            mensualidad: pnumberPrecioMensualidad,
            moneda: pfieldsetNumberPrecioMatricula,
            idCE: pidCentroEducativo,

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    request.done(function (res) {

        swal.fire({
            type: 'success',
            title: 'Su matrícula ha sido actualizada',
            text: res.msg,
            onClose: () => {
                window.location.href = 'mostrarMatriculas.html';
            }
        });
    });
    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Su matrícula no ha sido actualizada',
            text: res.msg
        });
    });
};

/**************************************************************************************************************/

let eliminarMatricula = (p_id) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/eliminarMatricula',
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
            title: 'Su matricula ha sido eliminada',
            text: res.msg,
            onClose: () => {
                window.location.href = 'mostrarMatriculas.html';
            }
        });

    });
    request.fail(function (res) {
        swal.fire({
            type: 'error',
            title: 'Su matrícula no ha sido eliminada',
            text: res.msg
        });
    });
};