'use strict';

let user = JSON.parse(sessionStorage.getItem('usuario'));

const inputMatricula = document.querySelector('#inputPrecioMatricula');
const inputMensualidad = document.querySelector('#inputPrecioMensualidad');
const inputfieldsetPrecio = document.querySelector('#fieldsetPrecio');
const botonRegistrarMatricula = document.querySelector('#btnRegistrarMatricula');
let idUsuarioCE = user._id;

const opcionRegistrar = document.querySelector('#registrarMatriculaCostos');

if(user.userType != "centroEducativo") {
    idUsuarioCE = IdGeneralCE;
    if (location.pathname.split("/").slice(-1) != 'mostrarMatriculaCostos.html') setTimeout(location.href='mostrarMatriculaCostos.html?idCE='+IdGeneralCE, 0);
    opcionRegistrar.classList.add('classNoPuede');
    if(user.userType == "padreFamilia"){

    }
} else {

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

    if (validar() == false) {

        let stringNombreMatricula = inputMatricula.value;
        let stringPrecioMatricula = inputMensualidad.value;
        let fieldsetnumberPrecioMatricula = document.querySelector('#fieldsetPrecio input[type=radio]:checked').value;
        let idCentroEducativo = idUsuarioCE;

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