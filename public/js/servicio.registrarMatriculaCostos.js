'use strict';

let registrarMatricula = (pstringNombreMatricula, pnumberPrecioMatricula, pfieldsetNumberPrecioMatricula, pidCentroEducativo) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_matricula",
        method: "POST",
        data: {

            nombre: pstringNombreMatricula,
            precio: pnumberPrecioMatricula,
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
            text: `${pstringNombreMatricula} ha sido registrada en todas y cada una de nuestras bases de datos`
        });
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'La matrícula no pudo ser registrada',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo'
        });
    });

};

let listarMatriculas = () => {
    let lista_matriculas = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_matriculas",
        method: "GET",
        data: {

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false,
    });

    request.done(function (msg) {
        lista_matriculas = msg.registrarMatricula;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return lista_matriculas;
};