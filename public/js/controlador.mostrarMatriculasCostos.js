'use strict';

const inputFiltrar = document.querySelector('#inputFiltrar')
let user = JSON.parse(sessionStorage.getItem("usuario"));
const opcionRegistrar = document.querySelector('#registrarMatriculaCostos');

let idUsuarioCE = user._id;

if(user.userType != "centroEducativo") {
    idUsuarioCE = IdGeneralCE;
    opcionRegistrar.classList.add('classNoPuede');

} else {

}
let matriculas = listarMatriculas(idUsuarioCE);
inputFiltrar.addEventListener('keyup', mostrarMatriculas);

function mostrarMatriculas() {

    const tabla = document.querySelector('#tblMatriculas tbody');
    const filtro = inputFiltrar.value;

    tabla.innerHTML = ' ';

    if (/^([0-9])*$/.test(matriculas)) {
        for (let i = 0; i < matriculas.length; i++) {

            if (matriculas[i]['matricula'].toLowerCase().includes(filtro.toLowerCase())) {
                let fila = tabla.insertRow();

                fila.insertCell().innerHTML = matriculas[i]['matricula'];
                fila.insertCell().innerHTML = matriculas[i]['mensualidad'];
                fila.insertCell().innerHTML = matriculas[i]['fieldsetPrecio'];
            } else {
                tabla.innerHTML = 'No existen matrículas registradas para este nivel';
            }
        }
    } else {
        tabla.innerHTML = 'No existen matrículas registradas para este nivel';
    }
}

mostrarMatriculas();