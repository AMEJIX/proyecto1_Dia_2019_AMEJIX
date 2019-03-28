'use strict';

let registrarMaterialInformativo = (ptema, pdescripcion, pfile, pIdCentro) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarMaterialInformativo",
        method: "POST",
        data: {
            tema: ptema,
            descripcion: pdescripcion,
            file: pfile,
            idCE: pIdCentro
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'El tema se ha registrado correctamente.',
            text: `Se registró correctamente.`
        });
    });

    request.fail(function (jqXHR, textStatus) {

    });
};

let listarMaterialUsuario = (idCE) => {
    let listaMaterialUser = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/centroEducativo/listarMaterialUsuario/" + idCE,
        method: "GET",
        data: {},
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listaMaterialUser = res.material;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listaMaterialUser; 
};

let listarMaterial = () => {
    let listaMaterial = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listarMaterialInformativo",
        method: "GET",
        data: {},
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listaMaterial = res.material;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listaMaterial;
};