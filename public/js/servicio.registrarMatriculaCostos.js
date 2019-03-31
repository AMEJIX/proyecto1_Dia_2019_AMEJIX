'use strict';

let registrarMatricula = (pstringPrecioMatricula, pnumberPrecioMensualidad, pfieldsetNumberPrecioMatricula, pidCentroEducativo) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_matricula",
        method: "POST",
        data: {

            matricula: pstringPrecioMatricula,
            mensualidad: pnumberPrecioMensualidad,
            fieldsetPrecio: pfieldsetNumberPrecioMatricula,
            idCE: pidCentroEducativo,

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false,
    });

    request.done(function (msg) {

        swal.fire({
            type: 'success',
            title: 'Matrícula registrada',
            text: `Su matrícula ha sido registrada en todas y cada una de nuestras bases de datos`
        });
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'La matrícula no pudo ser registrada',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo',
        });
    });

};

let listarMatriculas = (idCE) => {
    let listaMatriculas = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listarMatriculaCostosCE"+idCE,
        method: "GET",
        data: {

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false,
    });

    request.done(function (msg) {
        listaMatriculas = msg.matriculo;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return listaMatriculas;
};