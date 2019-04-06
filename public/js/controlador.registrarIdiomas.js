'use strict';

const inputIdioma = document.querySelector('#inputIdioma');
const botonRegistrarIdioma = document.querySelector('#botonRegistrarIdioma');

let validar = () => {
    let error = false;

    if (inputIdioma.value == '') {
        error = true;
        inputIdioma.classList.add('errorInput');
    } else {
        inputIdioma.classList.remove('errorInput');
    }

    return error;
}

let jalarDatosIdiomas = () => {

    if (validar() == false) {

        let parametrosIdioma = inputIdioma.value;

        registrarIdiomas(parametrosIdioma);
    } else {
        swal.fire({
            type: 'warning',
            title: 'Formulario incompleto',
            text: 'Por favor revise los campos resaltados',
        });
    }
}


botonRegistrarIdioma.addEventListener('click', jalarDatosIdiomas);