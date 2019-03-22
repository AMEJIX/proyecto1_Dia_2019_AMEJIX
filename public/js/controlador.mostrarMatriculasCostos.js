'use strict';

const tabla = document.querySelector('#tblMatriculas tbody');

let mostrarMatriculas = () => {
    let matriculas = listarMatriculas();
    tabla.innerHTML =  ' ';

    for (let i = 0; i < matriculas.length; i++) {
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = matriculas[i]['nombre'];
        fila.insertCell().innerHTML = matriculas[i]['precio'];
        fila.insertCell().innerHTML = matriculas[i]['fieldsetPrecio'];
    };
};

mostrarMatriculas();