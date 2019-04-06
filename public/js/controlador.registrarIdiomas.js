'use strict';

const inputIdioma = document.querySelector('#inputIdioma');
const botonRegistrarIdioma = document.querySelector('#botonRegistrarIdioma');

function validar() {
    let error = false;

    if (inputIdioma.value == '') {
        error = true;
        inputIdioma.classList.add('errorInput');
    } else {
        inputIdioma.classList.remove('errorInput');
        error = true;
    }

    return error;
}

let jalarDatosIdiomas = () => {

    if (validar() == false) {

        let parametrosIdioma = inputIdioma.value;

        registrarIdioma(parametrosIdioma);
    } else {
        swal.fire({
            type: 'warning',
            title: 'Formulario incompleto',
            text: 'Por favor revise los campos resaltados'
        });
    }
}


botonRegistrarIdioma.addEventListener('click', jalarDatosIdiomas);