'use strict';

const inputFiltrar = document.querySelector('#txtFiltrar');



let idCentroEducativo = '5c9506cdb643431b5cb7d185';

let listaPreguntasFrecuentes = getPreguntasFrecuentes(idCentroEducativo);

document.getElementById('tblPreguntasFrecuentes').insertAdjacentHTML('afterend', `<p id="error" id="mensajito">No se encontró ninguna pregunta frecuente relacionada con este centro educativo</p>`);

mostrarPreguntasFrecuentes();

inputFiltrar.addEventListener('keyup', mostrarPreguntasFrecuentes);

function mostrarPreguntasFrecuentes() {

    let tabla = document.querySelector('#tblPreguntasFrecuentes tbody');

    let busqueda = inputFiltrar.value;

    tabla.innerHTML = '';

    if (listaPreguntasFrecuentes.length > 0){

        if (document.getElementById('error')) eliminarMensaje();

        for (let i = 0; i < listaPreguntasFrecuentes.length; i++) {

            if (listaPreguntasFrecuentes[i]['pregunta'].toLowerCase().includes(busqueda.toLowerCase())){

                if (document.getElementById('error')) eliminarMensaje();

                let pregunta = tabla.insertRow();

                pregunta.classList.add('pregunta');

                pregunta.innerHTML = listaPreguntasFrecuentes[i]['pregunta'];

                let respuesta = tabla.insertRow();

                respuesta.classList.add('respuesta');

                respuesta.innerHTML = listaPreguntasFrecuentes[i]['respuesta'];
            } else{
                if (document.getElementById('error')) eliminarMensaje();
                insertarMensaje(`No se encontró la pregunta ${busqueda}`);
            }
        }
    } else {
        if (document.getElementById('error')) eliminarMensaje();
        insertarMensaje(`No se encontró ninguna pregunta frecuente relacionada con este centro educativo`);
    }

}

function eliminarMensaje() {
    document.querySelector('.contenido').removeChild(document.getElementById('error'));
}

function insertarMensaje(mensaje) {
    document.getElementById('tblPreguntasFrecuentes').insertAdjacentHTML('afterend', `<p id="error" id="mensajito"> ${mensaje}</p>`);
}