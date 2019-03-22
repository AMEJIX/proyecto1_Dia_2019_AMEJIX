'use strict';

const tabla = document.querySelector('#tblNoticias tbody');

let mostrarNoticias = () => {
    let noticias = listarNoticias();
    tabla.innerHTML = '';

    for (let i = 0; i < noticias.length; i++) {
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = noticias[i]['tituloNoticia'];
        fila.insertCell().innerHTML = noticias[i]['fechaNoticia'];
        fila.insertCell().innerHTML = noticias[i]['registrarNoticia'];
    };
};

mostrarNoticias();