'use strict';

const inputBuscar = document.querySelector('#inputBuscar');

let idiomas = listarIdiomas();
inputBuscar.addEventListener('keyup', mostrarIdiomas);

function mostrarIdiomas() {

    const tabla = document.querySelector('#tblIdiomas tbody');
    const filtro = inputBuscar.value;

    tabla.innerHTML = '';
    for (let i = 0; i < idiomas.length; i++) {

        if (idiomas[i]['idiomas'].toLowerCase().includes(filtro.toLowerCase())) {
            
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = idiomas[i]['idiomas'];

        }

    }
}

mostrarIdiomas();