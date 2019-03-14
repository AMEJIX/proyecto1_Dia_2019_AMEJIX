'use strict';

const inputFiltrar = document.querySelector('#txtFiltrar');

let listaPreguntasFrecuentes = getPreguntasFrecuentes();

mostrarPreguntasFrecuentes();

inputFiltrar.addEventListener('keyup', mostrarPreguntasFrecuentes);

function mostrarPreguntasFrecuentes() {

    let tabla = document.querySelector('#tblPreguntasFrecuentes tbody');

    let busqueda = inputFiltrar.value;

    tabla.innerHTML = '';

    for (let i = 0; i < listaPreguntasFrecuentes.length; i++) {
        if (listaPreguntasFrecuentes[i]['pregunta'].toLowerCase().includes(busqueda.toLowerCase())){

            let pregunta = tabla.insertRow();

            pregunta.classList.add('pregunta');

            pregunta.innerHTML = listaPreguntasFrecuentes[i]['pregunta'];

            let respuesta = tabla.insertRow();

            respuesta.classList.add('respuesta');

            respuesta.innerHTML = listaPreguntasFrecuentes[i]['respuesta'];
        }
    }
}