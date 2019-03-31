'use strict';

let registrarBeca = (pstringNombreBeca, pstringDescripcionBeca, pidCentroEducativo) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_beca",
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
        url: "http://localhost:4000/api/listarBecasCE/"+idCE,
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