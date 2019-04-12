'use strict';

let user = JSON.parse(sessionStorage.getItem("usuario"));
let centroEducativo = listarUsuariosCEencabezado(IdGeneralCE);

const inputComentario = document.querySelector('#inputComentario');
const btnEnviarComment = document.querySelector('#send');

let validarComments = () => {
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
    if (validarComments() == false) {
        let userPhoto = user.imagenPF;
        console.log(userPhoto);
        if (userPhoto == '') {
            userPhoto = 'img/icons8-user.png';
        }
        let userName = user.nombre += " " + user.apellido;
        // stars
        let comment = inputComentario.value;
        let idCentroEducativo = IdGeneralCE;

        // registrarComentario(stars, inputComentario, idCentroEducativo);
        registrarComentario(userPhoto, userName, comment, idCentroEducativo);

    } else {
        swal.fire({
            type: 'warning',
            title: 'El comentario no se ha registrado correctamente.',
            text: 'Por favor revise los campos resaltados.'
        });
    }
};

btnEnviarComment.addEventListener('click', obtenerDatos);

