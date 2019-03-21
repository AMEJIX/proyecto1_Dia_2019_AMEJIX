'use strict';

const inputFiltrar = document.querySelector('#txtFiltrar');

let listaPreguntasFrecuentes = getCitas();

mostrarCitas();

inputFiltrar.addEventListener('keyup', mostrarCitas);

function mostrarCitas() {

    let tabla = document.querySelector('#tblCitas tbody');

    let busqueda = inputFiltrar.value;

    tabla.innerHTML = '';

    for (let i = 0; i < listaPreguntasFrecuentes.length; i++) {
        if (listaPreguntasFrecuentes[i]['nombrePadreFamilia'].toLowerCase().includes(busqueda.toLowerCase())){

            let fila = tabla.insertRow();

            let fechaHora = fila.insertCell();

            fechaHora.classList.add('fechaHora');

            fechaHora.innerHTML = moment(listaPreguntasFrecuentes[i]['fechaHora']).format('DD/mm/YY hh:mm');

            let institucion = fila.insertCell();

            institucion.classList.add('padre');

            institucion.innerHTML = listaPreguntasFrecuentes[i]['nombrePadreFamilia'];
        }
    }
}