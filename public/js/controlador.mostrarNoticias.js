'use strict';

const inputFiltrar = document.querySelector('#inputFiltrar');
let user = JSON.parse(sessionStorage.getItem("usuario"));

let idUsuarioCE = user._id;

if (user.userType != "centroEducativo" || typeof listaPreguntasFrecuentes == 'string') {
    idUsuarioCE = IdGeneralCE;
} else {

}
let noticias = listarNoticias(idUsuarioCE);
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

            let celda_configuracion = fila.insertCell();

            //Creación del botón de editar
            let boton_editar = document.createElement('a');
            boton_editar.textContent = 'Editar';
            boton_editar.href = `registrarNoticia.html?idCE_noticias = $(noticias[i]['user._id'])`;

            celda_configuracion.appendChild(boton_editar);

            //let boton_eliminar = document.createElement('a');
            //boton_eliminar.textContent = 'Eliminar';
            //boton_eliminar.href = `registrarNoticia.html?idCE_noticias = $(noticias[i]['user._id'])`;

            //celda_configuracion.appendChild(boton_eliminar);
        }

    }
}
mostrarNoticias();