'use strict';

let user = JSON.parse(sessionStorage.getItem('usuario'));

const inputMatricula = document.querySelector('#inputPrecioMatricula');
const inputMensualidad = document.querySelector('#inputPrecioMensualidad');
const inputfieldsetPrecio = document.querySelector('#fieldsetPrecio');
const botonRegistrarMatricula = document.querySelector('#btnRegistrarMatricula');
let idUsuarioCE = user._id;

const opcionRegistrar = document.querySelector('.subOpcion #registrarMatriculaCostos');

if(user.userType != "centroEducativo") {
    idUsuarioCE = IdGeneralCE;
    opcionRegistrar.style.display = 'none';
    if (location.pathname.split("/").slice(-1) != 'loSentimos.html') setTimeout(location.href='loSentimos.html?idCE='+IdGeneralCE, 0);
}


let validar = () => {
    let error = false;

    let monedaSeleccionada = document.querySelector('#fieldsetPrecio input[type=radio]:checked');

    if (inputMatricula.value == '') {
        error = true;
        inputMatricula.classList.add('error_input');
    } else {
        inputMatricula.classList.remove('error_input');
    }

    if (inputMensualidad.value == '') {
        error = true;
        inputMensualidad.classList.add('error_input');
    } else {
        inputMensualidad.classList.remove('error_input');
    }

    if (monedaSeleccionada ==  null) {
        error = true;
        inputfieldsetPrecio.classList.add('error_input');
    } else {
        inputfieldsetPrecio.classList.remove('error_input');
    }


    return error;
};

let obtener_datos = () => {

    if (!validar()) {

        let stringNombreMatricula = inputMatricula.value;
        let stringPrecioMatricula = inputMensualidad.value;
        let fieldsetnumberPrecioMatricula = document.querySelector('#fieldsetPrecio input[type=radio]:checked').value;

        registrarMatricula(stringNombreMatricula, stringPrecioMatricula, fieldsetnumberPrecioMatricula, idUsuarioCE);

    } else {
        swal.fire({
            type: 'warning',
            title: 'La matrícula no fue registrada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

botonRegistrarMatricula.addEventListener('click', obtener_datos);