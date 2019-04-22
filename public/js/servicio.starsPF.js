'use strict';

let registrarEvaluacion = (photoCE, nameCE, provinciaCE, stars, starsProm, idCE) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarEvaluacion",
        method: "POST",
        data: {
            photoCE: photoCE,
            nameCE: nameCE,
            provinciaCE: provinciaCE,
            stars: stars,
            starsProm: starsProm,
            idCE: idCE
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        // async: false
    });

    request.done(function (res) {

    });

    request.fail(function (jqXHR, textStatus) {

    });
};

let modificarEvaluacion = (id, photoCE, nameCE, provinciaCE, stars, starsProm, idCE) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/modificarEvaluacionPF",
        method: "POST",
        data: {
            id: id,
            photoCE: photoCE,
            nameCE: nameCE,
            provinciaCE: provinciaCE,
            stars: stars,
            starsProm: starsProm,
            idCE: idCE
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        // async: false
    });

    request.done(function (res) {

    });

    request.fail(function (jqXHR, textStatus) {

    });
};

let obtenerEvaluacion = (idCE) => {
    let objetoStars;
    let request = $.ajax({
        url: "http://localhost:4000/api/obtenerEvaluacion/" + idCE,
        method: "GET",
        data: {

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        objetoStars = res.stars;
        console.log(res.stars);
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return objetoStars;
};

let listarEvaluacion = () => {
    let listaEvaluacion = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listarEvaluaciones",
        method: "GET",
        data: {},
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listaEvaluacion = res.stars;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listaEvaluacion;
};

let listarEvaluacionColegios = () => {
    let listaEvaluacion = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listarEvaluaciones",
        method: "GET",
        data: {},
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listaEvaluacion = res.stars;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listaEvaluacion;
};

let listarEvaluacionEscuelas = () => {
    let listaEvaluacion = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/listarEvaluaciones",
        method: "GET",
        data: {},
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listaEvaluacion = res.stars;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listaEvaluacion;
};