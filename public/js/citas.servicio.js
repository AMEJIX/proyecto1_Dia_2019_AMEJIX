'use strict';

let getCitas = () =>{
    let lista = [];
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/listarCitas",
            method: "GET",
            data: {},
            contentType:  'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json",
            async: false
        }
    );

    request.done(function (res) {
        lista = res.citas;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return lista;
};

let registrarCita = (pfechaHora, pnombreCE, pnombrePF, pcorreoPF) =>{
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/registrarCita",
            method: "POST",
            data: {
                fechaHora: pfechaHora,
                nombreCentroEducativo: pnombreCE,
                nombrePadreFamilia: pnombrePF,
                correoPadreFamilia: pcorreoPF
            },
            contentType:  'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json"
        }
    );

    request.done(function (msg) {
        swal.fire(
            {
                type: 'success',
                title: 'Se agendó la cita con éxito',
                text: `Revise su correo.`,
                showConfirmButton: false,
                timer: 1500
            }
        );
    });

    request.fail(function (jqXHR, textStatus) {

    });
};