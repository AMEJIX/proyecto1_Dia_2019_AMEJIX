'use strict';


const inputFiltrar = document.querySelector('#txtFiltrar');

let user = JSON.parse(sessionStorage.getItem('usuario'));//ya está declarado

let idCentroEducativo = user._id;

if (localStorage.getItem('idCentro')){
    idCentroEducativo = localStorage.getItem('idCentro');
}

let listaPreguntasFrecuentes = getPreguntasFrecuentes(idCentroEducativo);

localStorage.removeItem('idCentro');

console.log(listaPreguntasFrecuentes.length);

// let idCentroEducativo = '5c9506cdb643431b5cb7d185';
console.log(user.userType);
if(user.userType == 'centroEducativo' || user.userType == 'administrador'){

    if (location.pathname.split("/").slice(-1) != 'preguntasFrecuentesCE&Admin.html') setTimeout(location.href='preguntasFrecuentesCE&Admin.html', 0);

    insertarMensaje(`No se encontró ninguna pregunta frecuente relacionada con este centro educativo`);

    mostrarPreguntasFrecuentes();

    inputFiltrar.addEventListener('keyup', mostrarPreguntasFrecuentes);

} else {
    if (location.pathname.split("/").slice(-1) != 'preguntasFrecuentesPF.html')  setTimeout(location.href='preguntasFrecuentesPF.html', 0);

    //////////////////// QUEMADO

    idCentroEducativo = '5c969e24ca48996d8b483434';

    listaPreguntasFrecuentes = getPreguntasFrecuentes(idCentroEducativo);

    //////////////////// QUEMADO
    idCentroEducativo =

    insertarMensaje(`No se encontró ninguna pregunta frecuente relacionada con este centro educativo`);

    mostrarPreguntasFrecuentes();

    inputFiltrar.addEventListener('keyup', mostrarPreguntasFrecuentes);
}


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