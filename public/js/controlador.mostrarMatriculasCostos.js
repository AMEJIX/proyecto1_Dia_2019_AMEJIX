'use strict';

let user = JSON.parse(sessionStorage.getItem("usuario"));
const opcionRegistrar = document.querySelector('.subOpcion #registrarMatriculaCostos');

let idUsuarioCE = user._id;

if(user.userType != "centroEducativo") {
    idUsuarioCE = IdGeneralCE;
    opcionRegistrar.style.display = 'none';
    opcionRegistrar.style.visibility = 'none';
}

insertarMensaje(`No se encontró información de los costos de matrícula`);

let matriculas = listarMatriculas(idUsuarioCE);

function mostrarMatriculas() {

    const tabla = document.querySelector('#tblMatriculas tbody');

    tabla.innerHTML = '';

    if (!(typeof matriculas == 'string')) {
        eliminarMensaje();
        for (let i = 0; i < matriculas.length; i++) {

            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = matriculas[i]['matricula'];
            fila.insertCell().innerHTML = matriculas[i]['mensualidad'];
            fila.insertCell().innerHTML = matriculas[i]['moneda'];
        }
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