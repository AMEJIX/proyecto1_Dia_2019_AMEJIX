'use strict';

const inputFiltrar = document.querySelector('#txtFiltrar');

let user = JSON.parse(sessionStorage.getItem('usuario'));

if(user.userType === 'centroEducativo'){
    if (location.pathname.split("/").slice(-1) !== 'loSentimos.html')  setTimeout(location.href='loSentimos.html', 0);
}

let correoDelPadreDeFamilia = user.email;

let listaPreguntasFrecuentes = getCitasPF(correoDelPadreDeFamilia);

document.getElementById('tblCitas').insertAdjacentHTML('afterend', `<p id="error" id="mensajito"> No se encontró ninguna cita agendada relacionada con el usuario con el correo ${correoDelPadreDeFamilia}</p>`);

mostrarCitas();

inputFiltrar.addEventListener('keyup', mostrarCitas);

function mostrarCitas() {

    let tabla = document.querySelector('#tblCitas tbody');

    let busqueda = inputFiltrar.value;

    tabla.innerHTML = '';

    if (listaPreguntasFrecuentes.length > 0){

        if (document.getElementById('error')) eliminarMensaje();

        for (let i = 0; i < listaPreguntasFrecuentes.length; i++) {
            if (listaPreguntasFrecuentes[i]['nombreCentroEducativo'].toLowerCase().includes(busqueda.toLowerCase())){
                if (document.getElementById('error')) eliminarMensaje();

                let fila = tabla.insertRow();

                let fechaHora = fila.insertCell();

                fechaHora.classList.add('fechaHora');

                fechaHora.innerHTML = moment(listaPreguntasFrecuentes[i]['fechaHora']).format('DD/mm/YY hh:mm a');

                let institucion = fila.insertCell();

                institucion.classList.add('institucion');

                institucion.innerHTML = listaPreguntasFrecuentes[i]['nombreCentroEducativo'];
            } else {
                if (document.getElementById('error')) eliminarMensaje();
                insertarMensaje(`No se encontró ninguna cita agendada con ${busqueda}`);
            }
        }
    } else {
        if (document.getElementById('error')) eliminarMensaje();
        insertarMensaje(`No se encontró ninguna cita agendada relacionada con el usuario con el correo ${correoDelPadreDeFamilia}`);
    }
}

function eliminarMensaje() {
    document.querySelector('.contenido').removeChild(document.getElementById('error'));
}

function insertarMensaje(mensaje) {
    document.getElementById('tblCitas').insertAdjacentHTML('afterend', `<p id="error" id="mensajito"> ${mensaje}</p>`);
}