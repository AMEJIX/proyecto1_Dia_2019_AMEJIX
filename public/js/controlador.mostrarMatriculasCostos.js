'use strict';

let matriculas = listarMatriculas();
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
        }
    };
};

mostrarMatriculas();