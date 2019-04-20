'use strict';

let registrarEvaluacion = (stars, idCE) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarEvaluacion",
        method: "POST",
        data: {
            stars: stars,
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

let modificarEvaluacion = (id, stars, idCE) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/modificarEvaluacionPF",
        method: "POST",
        data: {
            id: id,
            stars: stars,
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