'use strict';

let user = JSON.parse(sessionStorage.getItem("usuario"));
let centroEducativo = listarUsuariosCEencabezado(IdGeneralCE);

const star1 = document.querySelector('#uno');
const star2 = document.querySelector('#dos');
const star3 = document.querySelector('#tres');
const star4 = document.querySelector('#cuatro');
const star5 = document.querySelector('#cinco');
const inputComentario = document.querySelector('#inputComentario');
const btnEnviar = document.querySelector('#send');
// const idCE = user._id;

// let rating = () => {
//     // let stars;
//     star1.classList.add('selected');
// };

// star1.addEventListener('click', rating);
// let color = () => {

// };

let validar = () => {
    let error = false;

    if (inputComentario.value == '') {
        error = true;
        inputComentario.classList.add('errorInput');
    } else {
        inputComentario.classList.remove('errorInput');
    }

    return error;
};

let obtenerDatos = () => {
    if (validar() == false) {
        let comment = inputComentario.value;
        let idCentroEducativo = IdGeneralCE;

        // registrarComentario(pstars, inputComentario, idCentroEducativo);
        registrarComentario(comment, idCentroEducativo);

    } else {
        swal.fire({
            type: 'warning',
            title: 'El comentario no se ha registrado correctamente.',
            text: 'Por favor revise los campos resaltados.'
        });
    }
};

btnEnviar.addEventListener('click', obtenerDatos);

