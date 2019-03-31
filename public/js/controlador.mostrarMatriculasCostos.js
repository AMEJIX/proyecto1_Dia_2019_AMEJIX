'use strict';

const inputFiltrar = document.querySelector('#inputFiltrar')
let user = JSON.parse(sessionStorage.getItem("usuario"));

let idUsuarioCE = user._id;

if(user.userType != "centroEducativo") {
    idUsuarioCE = IdGeneralCE;
} else {

}
let matriculas = listarMatriculas(idUsuarioCE);
inputFiltrar.addEventListener('keyup', mostrarMatriculas);

function mostrarMatriculas() {

    const tabla = document.querySelector('#tblMatriculas tbody');
    const filtro = inputFiltrar.value;

    tabla.innerHTML = ' ';
    for (let i = 0; i < matriculas.length; i++) {
        
        if (matriculas[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = matriculas[i]['nombre'];
            fila.insertCell().innerHTML = matriculas[i]['precio'];
            fila.insertCell().innerHTML = matriculas[i]['fieldsetPrecio'];
        } else {
            tabla.innerHTML = 'No existen matrículas registradas para este nivel';
        }
    };
};

mostrarMatriculas();