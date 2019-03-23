'use strict';

const inputFiltrar = document.querySelector('#txtFiltrar');

let nombreDelCentroEducativo = 'Joaquín García Monge';

let listaPreguntasFrecuentes = getCitasCE(nombreDelCentroEducativo);

insertarMensaje(`No se encontró ninguna cita agendada con el centro educativo ${nombreDelCentroEducativo}`);

mostrarCitas();

inputFiltrar.addEventListener('keyup', mostrarCitas);

function mostrarCitas() {

    let tabla = document.querySelector('#tblCitas tbody');

    let busqueda = inputFiltrar.value;

    tabla.innerHTML = '';

    if (listaPreguntasFrecuentes !== 'No se encontró ninguna cita') {

        if (document.getElementById('error')) eliminarMensaje();

        for (let i = 0; i < listaPreguntasFrecuentes.length; i++) {
            if (listaPreguntasFrecuentes[i]['nombrePadreFamilia'].toLowerCase().includes(busqueda.toLowerCase())) {

                if (document.getElementById('error')) eliminarMensaje();

                let fila = tabla.insertRow();

                let fechaHora = fila.insertCell();

                fechaHora.classList.add('fechaHora');

                fechaHora.innerHTML = moment(listaPreguntasFrecuentes[i]['fechaHora']).format('DD/mm/YY hh:mm');

                let institucion = fila.insertCell();

                institucion.classList.add('padre');

                institucion.innerHTML = listaPreguntasFrecuentes[i]['nombrePadreFamilia'];
            } else {
                if (document.getElementById('error')) eliminarMensaje();
                insertarMensaje(`No se encontró ninguna cita agendada con ${busqueda}`);
            }
        }
    } else {
        if (document.getElementById('error')) eliminarMensaje();
        insertarMensaje(` No se encontró ninguna cita agendada con el centro educativo ${nombreDelCentroEducativo}`);
    }
}


function eliminarMensaje() {
    document.querySelector('.contenido').removeChild(document.getElementById('error'));
}

function insertarMensaje(mensaje) {
    document.getElementById('tblCitas').insertAdjacentHTML('afterend', `<p id="error" id="mensajito"> ${mensaje}</p>`);
}