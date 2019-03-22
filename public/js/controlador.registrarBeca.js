'use strict';

const inputNombreBeca = document.querySelector('#inputNombreBeca');
const inputDescripcionBeca = document.querySelector('#inputDescripcionBeca');
const botonRegistrarBeca = document.querySelector('#btnRegistrarBeca');

let validar = () => {
    let error = false;
    if (inputNombreBeca.value == '') {
        error = true;
        inputNombreBeca.classList.add('error_input');
    } else {
        inputNombreBeca.classList.remove('error_input');
    }

    if (inputDescripcionBeca.value == '') {
        error = true;
        inputDescripcionBeca.classList.add('error_input');
    } else {
        inputDescripcionBeca.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = () => {

    if (validar() == false) {

        let stringNombreBeca = inputNombreBeca.value;
        let stringDescripcionBeca = inputDescripcionBeca.value;


        registrarBeca(stringNombreBeca, stringDescripcionBeca);

    } else {
        swal.fire({
            type: 'warning',
            title: 'La beca no fue registrada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

botonRegistrarBeca.addEventListener('click', obtener_datos);