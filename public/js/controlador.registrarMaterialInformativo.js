'use strict';

let user = JSON.parse(sessionStorage.getItem("usuario"));

const inputTema = document.querySelector('#inputTema');
const text = document.querySelector('#descripcion');
const file = document.querySelector('#documentPreview');
const btnGuardar = document.querySelector('#btnGuardar');
const idCE = user._id;

let validar = () => {
    let error = false;

    if (inputTema.value == '') {
        error = true;
        inputTema.classList.add('errorInput');
    } else {
        inputTema.classList.remove('errorInput');
    }

    if (text.value == '') {
        error = true;
        text.classList.add('errorInput');
    } else {
        text.classList.remove('errorInput');
    }

    return error;
};

let obtenerDatos = () => {
    if (validar() == false) {
        let tema = inputTema.value;
        let descripcion = text.value;
        let file = documentPreview.src;
        let idCentroEducativo = idCE;

        registrarMaterialInformativo(tema, descripcion, file, idCentroEducativo);

    } else {
        swal.fire({
            type: 'warning',
            title: 'El tema no se ha registrado correctamente.',
            text: 'Por favor revise los campos resaltados.'
        });
    }
};

btnGuardar.addEventListener('click', obtenerDatos);