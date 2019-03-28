'use strict';

const inputFiltrar = document.querySelector('#inputFiltrar')

let becas = listarBecas();
inputFiltrar.addEventListener('keyup', mostrarBecas);

function mostrarBecas() {

    const tabla = document.querySelector('#tblBecas tbody');
    const filtro = inputFiltrar.value;

    tabla.innerHTML = '';
    for (let i = 0; i < becas.length; i++) {

        if (becas[i]['nombreBeca'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = becas[i]['nombreBeca'];
            fila.insertCell().innerHTML = becas[i]['descripcionBeca'];
        }
    };
};

mostrarBecas()