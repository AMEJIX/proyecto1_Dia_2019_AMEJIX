'use strict';

let registrarPadreFamilia = (userType, nombre, segundoNombre, apellido, segundoApellido, identificacion, nacionalidad, email, telefono, provincia, canton, distrito, contrasenna, edades) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_usuario",
        method: "POST",
        data: {
            userType: userType,
            nombre: nombre,
            segundoNombre: segundoNombre,
            apellido: apellido,
            segundoApellido: segundoApellido,
            identificacion: identificacion,
            nacionalidad: nacionalidad,
            email: email,
            telefono: telefono,
            provincia: provincia,
            canton: canton,
            distrito: distrito,
            contrasenna: contrasenna,
            edades : edades,
           
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (res) {
        let resType;
        if (res.success) {
            resType = 'success';
        } else {
            resType = 'warning';
        }


        swal.fire({
            type: resType,
            title: res.msj,

        });
    });



    request.fail(function (jqXHR, textStatus) {

    });




};

let registrarCentroEducativo = (userType, centroEducativo, cedulaJuridica, nombreComercial, anno, genero, religion, email, telCE, web, fax, histroia, provincia, canton, distrito, nombreCEP, departamento, telCEP, extension, numIDCEP, emailCEP, lat, lng, contrasenna, privacidad, clasificacion, tipo) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_usuario",
        method: "POST",
        data: {

            userType: userType,
            centroEducativo: centroEducativo,
            cedulaJuridica: cedulaJuridica,
            nombreComercial: nombreComercial,
            anno: anno,
            genero: genero,
            religion: religion,
            telCE: telCE,
            web: web,
            fax: fax,
            histroia: histroia,
            provincia: provincia,
            canton : canton,
            distrito : distrito,
            nombreCEP: nombreCEP,
            departamento: departamento,
            telCEP: telCEP,
            extension: extension,
            numIDCEP: numIDCEP,
            email: email,
            emailCEP: emailCEP,
            lat : lat,
            lng : lng,
            contrasenna : contrasenna,
            privacidad : privacidad,
            clasificacion : clasificacion,
            tipo : tipo
            




        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (res) {
        let resType;
        if (res.success) {
            resType = 'success';
        } else {
            resType = 'warning';
        }


        swal.fire({
            type: resType,
            title: res.msj,

        });
    });



    request.fail(function (jqXHR, textStatus) {

    });




};