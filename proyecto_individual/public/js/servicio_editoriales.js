'use strict';

let listar_editoriales = () =>{

};

let registrarEditorial = (pcodigo, pnombre, ppais) =>{
    let request = $.ajax(
        {
            url: "http://localhost:4000/api/registrar_editorial",
            method: "POST",
            data: {
                codigo: pcodigo,
                nombre: pnombre,
                pais, ppais
            },
            contentType:  'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: "json"
        }
    );

    request.done(function (msg) {
        swal.fire(
            {
                type: 'success',
                title: 'Se registró correctamente la editorial',
                text: `La editorial ${pnombre} del país ${ppais} cuyo código es ${pcodigo}`+
                    ` se registró correctamente.`
            }
        );
    });

    request.fail(function (jqXHR, textStatus) {

    });
};