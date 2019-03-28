'use strict';

const inputFiltrar = document.querySelector('#inputFiltrar');

let noticias = listarNoticias();
inputFiltrar.addEventListener('keyup', mostrarNoticias);

function mostrarNoticias() {

    const tabla = document.querySelector('#tblNoticias tbody');
    const filtro = inputFiltrar.value;

    tabla.innerHTML = '';

    for (let i = 0; i < noticias.length; i++) {

        if (noticias[i]['tituloNoticia'].toLowerCase().includes(filtro.toLowerCase())) {

            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = noticias[i]['tituloNoticia'];
            fila.insertCell().innerHTML = noticias[i]['fechaNoticia'];
            fila.insertCell().innerHTML = noticias[i]['registrarNoticia'];
        }
    };
};
mostrarNoticias()