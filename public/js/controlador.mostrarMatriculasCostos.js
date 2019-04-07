'use strict';



let user = JSON.parse(sessionStorage.getItem("usuario"));
// const opcionRegistrar = document.querySelector('#registrarMatriculaCostos');
// const opcionMostrar = document.querySelector('#mostrarMatriculas');

let idUsuarioCE = user._id;

if(user.userType != "centroEducativo") {
    idUsuarioCE = IdGeneralCE;
    // opcionRegistrar.style.display = 'none';
    // opcionRegistrar.style.visibility = 'none';
    // opcionMostrar.href = 'mostrarMatriculaCostos.html?idCE='+ IdGeneralCE;
}

insertarMensaje(`No se encontró información de los costos de matrícula`);

let matriculas = listarMatriculas(idUsuarioCE);

function mostrarMatriculas() {

    const tabla = document.querySelector('#tblMatriculas tbody');

    tabla.innerHTML = '';

    if (!(typeof matriculas == 'string')) {
        eliminarMensaje();
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = matriculas['matricula'];
            fila.insertCell().innerHTML = matriculas['mensualidad'];
            fila.insertCell().innerHTML = matriculas['moneda'];
    } else {
        if (document.getElementById('tblMatriculas #error')) {
            insertarMensaje(`No se encontró información de los costos de matrícula`);
        }
    }
}

mostrarMatriculas();

function eliminarMensaje() {
    document.querySelector('.contenido').removeChild(document.getElementById('error'));
}

function insertarMensaje(mensaje) {
    document.getElementById('tblMatriculas').insertAdjacentHTML('afterend', `<p id="error"> ${mensaje}</p>`);
}