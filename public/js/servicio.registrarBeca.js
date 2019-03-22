'use strict';

let registrarBeca = (pstringNombreBeca, pstringDescripcionBeca) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_beca",
        method: "POST",
        data: {

            nombreBeca: pstringNombreBeca,
            descripcionBeca: pstringDescripcionBeca,

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

let listarBecas = () => {
    let listaBecas = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listar_becas",
        method: "GET",
        data: {

        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json",
        async: false,
    });

    request.done(function (msg) {
        listaBecas = msg.registrarBeca;
    });

    request.fail(function (jqXHR, textStatus) {

    });
    return listaBecas;
};