'use strict';

let user = JSON.parse(sessionStorage.getItem('usuario'));

const inputNombreMatricula = document.querySelector('#inputNombreMatricula');
const inputPrecioMatricula = document.querySelector('#inputPrecioMatricula');
const inputfieldsetPrecio = document.querySelector('#fieldsetPrecio');
const botonRegistrarMatricula = document.querySelector('#btnRegistrarMatricula');
const idCE = user._id;

let validar = () => {
    let error = false;

    let inputfieldsetPrecio = document.querySelector('#fieldsetPrecio input[type=radio]:checked');

    if (inputNombreMatricula == ' ') {
        error = true;
        inputNombreMatricula.classList.add('error_input');
    } else {
        inputNombreMatricula.classList.remove('error_input');
    }

    if (inputPrecioMatricula == ' ') {
        error = true;
        inputPrecioMatricula.classList.add('error_input');
    } else {
        inputPrecioMatricula.classList.remove('error_input');
    }

    if (inputfieldsetPrecio ==  null) {
        error = true;
        inputfieldsetPrecio.classList.add('error_input');
    } else {
        inputfieldsetPrecio.classList.remove('error_input');
    }


    return error;
};

let obtener_datos = () => {

    if (validar() == false) {

        let stringNombreMatricula = inputNombreMatricula.value;
        let stringPrecioMatricula = inputPrecioMatricula.value;
        let fieldsetnumberPrecioMatricula = document.querySelector('#fieldsetPrecio input[type=radio]:checked').value;
        let idCentroEducativo = idCE;

        registrarMatricula(stringNombreMatricula, stringPrecioMatricula, fieldsetnumberPrecioMatricula, idCentroEducativo);

    } else {
        swal.fire({
            type: 'warning',
            title: 'La matrícula no fue registrada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

botonRegistrarMatricula.addEventListener('click', obtener_datos);