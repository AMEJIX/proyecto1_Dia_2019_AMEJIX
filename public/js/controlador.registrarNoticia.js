'use strict';

const inputTituloNoticia = document.querySelector('#inputTituloNoticia');
const inputRegistrarNoticia = document.querySelector('#inputRegistrarNoticia');
const inputFechaNoticia = document.querySelector('#inputFechaNoticia');
const botonRegistrarNoticia = document.querySelector('#btnRegistrarNoticia');

let validar = () => {
    let error = false;

    if (inputTituloNoticia.value == '') {
        error = true;
        inputTituloNoticia.classList.add('error_input');
    } else {
        inputTituloNoticia.classList.remove('error_input');
    }

    if (inputFechaNoticia.value == '') {
        error = true;
        inputFechaNoticia.classList.add('error_input');
    } else {
        inputFechaNoticia.classList.remove('error_input');
    }

    if (inputRegistrarNoticia.value == '') {
        error = true;
        inputRegistrarNoticia.classList.add('error_input');
    } else {
        inputRegistrarNoticia.classList.remove('error_input');
    }


    return error;
};

let obtener_datos = () => {

    if (validar() == false) {

        let stringTituloNoticia = inputTituloNoticia.value;
        let stringRegistrarNoticia = inputRegistrarNoticia.value;
        let stringFechaNoticia = inputFechaNoticia.value;


        registrarNoticia(stringTituloNoticia, stringRegistrarNoticia, stringFechaNoticia);

    } else {
        swal.fire({
            type: 'warning',
            title: 'La beca no fue registrada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

botonRegistrarNoticia.addEventListener('click', obtener_datos);