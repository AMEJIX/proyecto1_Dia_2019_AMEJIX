'use strict';

let registrarPadreFamilia = (userType, nombre, segundoNombre, apellido, segundoApellido, identificacion, nacionalidad, email, telefono, provincia, canton, distrito, contrasenna, edades, imagenPF, estado) => {

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
            imagenPF: imagenPF,
            estado: estado
           
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

let registrarCentroEducativo = (userType, centroEducativo, cedulaJuridica, nombreComercial, anno, genero, religion, email, telCE, web, facebook, twitter, instagram, fax, histroia, provincia, canton, distrito, nombreCEP, segundoNombreCEP, apellidoCEP, segundoApellidoCEP, departamento, telCEP, extension, numIDCEP, emailCEP, lat, lng, contrasenna, privacidad, clasificacion, tipo, grados, imagen, imagenCEP,direccionExacta, idiomas, servicios, descipcionesServicio, documentCE, estado) => {

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
            facebook: facebook,
            twitter: twitter,
            instagram: instagram,
            fax: fax,
            histroia: histroia,
            provincia: provincia,
            canton : canton,
            distrito : distrito,
            nombreCEP: nombreCEP,
            segundoNombreCEP : segundoNombreCEP,
            apellidoCEP: apellidoCEP,
            segundoApellidoCEP : segundoApellidoCEP,
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
            tipo : tipo,
            grados : grados,
            imagen : imagen,
            imagenCEP : imagenCEP,
            direccionExacta : direccionExacta,
            idiomas : idiomas,
            servicios : servicios,
            descipcionesServicio : descipcionesServicio,
            documentCE : documentCE,
            estado : estado

            




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