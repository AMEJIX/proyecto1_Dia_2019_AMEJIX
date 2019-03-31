'use strict';

let getCriteriosBusqueda = () =>{
    let lista = [];
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/listarCriteriosBusqueda",
            method: "GET",
            data: {},
            contentType:  'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json",
            async: false
        }
    );

    request.done(function (res) {
        lista = res.criteriosBusqueda;
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire(
            {
                type: 'warning',
                title: 'Ya existe',
                text: `No puede agregar una etiqueta que ya ha sido registrada`,
                showConfirmButton: true,
                timer: 1500
            }
        );
    });

    return lista;
};

let registrarCriterioBusqueda = (pnombre) =>{
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/registrarCriterioBusqueda",
            method: "POST",
            data: {
                nombre : pnombre
            },
            contentType:  'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json"
        }
    );

    request.done(function (msg) {
        swal.fire(
            {
                type: 'success',
                title: 'Se registró correctamente el criterio de búsqueda',
                text: `El criterio de búsqueda se ha añadido a las opciones de etiquetas de búsqueda.`,
                showConfirmButton: false,
                timer: 1500
            }
        );
    });

    request.fail(function (jqXHR, textStatus) {

    });
};