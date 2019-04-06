'use strict';

const inputFiltrar = document.querySelector('#inputFiltrar')
let user = JSON.parse(sessionStorage.getItem("usuario"));

let idUsuarioCE = user._id;



if (user.userType != "centroEducativo") {
    idUsuarioCE = IdGeneralCE;
} else {
    typeof listaPreguntasFrecuentes == 'string';
}

let becas = listarBecas(idUsuarioCE);
inputFiltrar.addEventListener('keyup', mostrarBecas);

function mostrarBecas() {

    const tabla = document.querySelector('#tblBecas tbody');
    const filtro = inputFiltrar.value;

    tabla.innerHTML = '';
    for (let i = 0; i < becas.length; i++) {

        if (becas[i]['nombreBeca'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = becas[i]['nombreBeca'];
            fila.insertCell().innerHTML = becas[i]['descripcionBeca'];

            let celda_configuracion = fila.insertCell();

            //Creación del botón de editar
            let boton_editar = document.createElement('a');
            boton_editar.textContent = 'Editar';
            boton_editar.href = `registrarBeca.html?idCE_becas = $(becas[i]['user._id'])`;

            celda_configuracion.appendChild(boton_editar);
        }
    }
}

mostrarBecas();