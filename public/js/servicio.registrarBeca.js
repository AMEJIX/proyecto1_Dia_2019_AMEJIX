'use strict';

let registrarBeca = (pstringNombreBeca, pstringDescripcionBeca, pidCentroEducativo) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrarBeca",
        method: "POST",
        data: {

            nombreBeca: pstringNombreBeca,
            descripcionBeca: pstringDescripcionBeca,
            idCE: pidCentroEducativo,

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false,
    });

    request.done(function (msg) {

        swal.fire({
            type: 'success',
            title: 'Beca registrada correctamente',
            text: ``
        });
    });

    request.fail(function (jqXHR, textStatus) {

    });

};

let listarBecas = (idCE) => {
    let listaBecas = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listarBecasCE/" + idCE,
        method: "GET",
        data: {

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false,
    });

    request.done(function (msg) {
        listaBecas = msg.becas;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return listaBecas;
};

let editarBeca = (pstringNombreBeca, pstringDescripcionBeca, pidCentroEducativo, p_id) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/editarBeca',
        method: "POST",
        data: {
            nombreBeca: pstringNombreBeca,
            descripcionBeca: pstringDescripcionBeca,
            idCE: pidCentroEducativo,
            id: p_id
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    request.done(function (res) {

        swal.fire({
            type: 'success',
            title: 'Beca actualizada',
            text: res.msg,
            onClose: () => {
                window.location.href = 'mostrarBecas.html';
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

let eliminarBeca = (p_id) => {
    let request = $.ajax({
        url: 'http://localhost:4000/api/eliminarBeca',
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
            title: 'Beca eliminado',
            text: res.msg,
            onClose: () => {
                window.location.href = 'mostrarBecas.html';
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