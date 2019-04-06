'use strict';

const inputBuscar = document.querySelector('#inputBuscar');

const tamannioArreglo = listarIdiomas;

function llenarTabla() {

    const invocarTablaHtml = document.querySelector('#tblIdiomas tbody');

    const agarrarLoQueEscribe = inputBuscar.value;

    invocarTablaHtml.innerHTML = '';
    for (let i = 0; i < tamannioArreglo.length; i++) {

        let fila = agarrarLoQueEscribe.inserRow();

        fila.inserCell().innerHTML = tamannioArreglo[i]['idioma'];

    }
}

llenarTabla();