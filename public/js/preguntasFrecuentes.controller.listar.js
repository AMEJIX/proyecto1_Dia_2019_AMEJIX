'use strict';

const opcionVer = document.querySelector('#opcionVer');

const inputFiltrar = document.querySelector('#txtFiltrar');

let user = JSON.parse(sessionStorage.getItem('usuario'));//ya está declarado

let idCentroEducativo;


if (user.userType == 'padreFamilia' ) {//REDIRECCIONAMIENTO
    if (location.pathname.split("/").slice(-1) != 'preguntasFrecuentesPF.html') setTimeout(location.href='preguntasFrecuentesPF.html?idCE='+IdGeneralCE, 0);
    opcionVer.href = 'preguntasFrecuentesPF.html?idCE='+IdGeneralCE;
} else {
    if (location.pathname.split("/").slice(-1) != 'preguntasFrecuentesCE&Admin.html') setTimeout(location.href='preguntasFrecuentesCE&Admin.html?idCE='+IdGeneralCE, 0);
    opcionVer.href = 'preguntasFrecuentesCE&Admin.html?idCE='+IdGeneralCE;
}

if (user.userType == 'padreFamilia' || user.userType == 'superAdministrador' ){
    idCentroEducativo = IdGeneralCE;
}else {
    idCentroEducativo = user._id;
}

let listaPreguntasFrecuentes = getPreguntasFrecuentes(idCentroEducativo);

//
console.log(listaPreguntasFrecuentes.length);

insertarMensaje(`No se encontró ninguna pregunta frecuente relacionada con este centro educativo`);

mostrarPreguntasFrecuentes();

inputFiltrar.addEventListener('keyup', mostrarPreguntasFrecuentes);


function mostrarPreguntasFrecuentes() {

    let tabla = document.querySelector('#tblPreguntasFrecuentes tbody');

    let busqueda = inputFiltrar.value;

    tabla.innerHTML = '';

    if (listaPreguntasFrecuentes.length > 0 && !(typeof listaPreguntasFrecuentes == 'string')){

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
    document.querySelector('.right').removeChild(document.getElementById('error'));
}

function insertarMensaje(mensaje) {
    document.getElementById('tblPreguntasFrecuentes').insertAdjacentHTML('afterend', `<p id="error" id="mensajito"> ${mensaje}</p>`);
}