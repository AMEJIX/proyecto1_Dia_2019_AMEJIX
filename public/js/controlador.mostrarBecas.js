'use strict';

const tabla = document.querySelector('#tblBecas tbody');

let mostrarBecas = () => {
    let becas = listarBecas();
    tabla.innerHTML = '';

    for (let i = 0; i < becas.length; i++) {
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = becas[i]['nombreBeca'];
        fila.insertCell().innerHTML = becas[i]['descripcionBeca'];
    };
};

mostrarBecas();