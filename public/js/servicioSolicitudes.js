
let listarSolicitudes = () => {
    let listaSolicitudes = [];
    let request = $.ajax({
        url: "http://localhost:4000/api/solicitudes",
        method: "GET",
        data: {
            
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listaSolicitudes = res.usuario;
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return listaSolicitudes;
};



let actualizarEstadoSolicitud = (estado, id) =>{
    let request = $.ajax({

        url: "http://localhost:4000/api/actualizar",
        method: "POST",
        data: {
            estado: estado,
            id: id
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });

    request.done(function (res) {
        swal.fire({
            type: 'success',
            title: 'exito',
            text: res.msg

        });
     });



};