'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));
let centroEducativo = listarUsuariosCEencabezado(IdGeneralCE);

const ratings = document.querySelector('.starrr')
const inputComentario = document.querySelector('#inputComentario');
const btnEnviarComment = document.querySelector('#send');
let value = 0;
let evaluacion = obtenerEvaluacion(IdGeneralCE);

$('.starrr').starrr({
    rating: 0,
    change: function (e, valor) {
        value = valor;
    }
});

let validarComments = () => {
    let error = false;

    if (value === 0) {
        error = true;
        ratings.classList.add('errorInput');
    } else {
        ratings.classList.remove('errorInput');
    }

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

        let stars = value;

        let comment = inputComentario.value;
        let idCentroEducativo = IdGeneralCE;

        // registrarComentario(stars, inputComentario, idCentroEducativo);
        registrarComentario(userPhoto, userName, stars, comment, idCentroEducativo);

        console.log('Evaluacion:' + evaluacion);
        if (evaluacion === false) {
            registrarEvaluacion(stars, idCE);
        } else {
            let id = evaluacion._id;
            let starsTotal = stars + evaluacion.stars;
            modificarEvaluacion(id, starsTotal, IdGeneralCE);
        }

    } else {
        swal.fire({
            type: 'warning',
            title: 'El comentario no se ha registrado correctamente.',
            text: 'Por favor revise los campos resaltados.'
        });
    }
};

btnEnviarComment.addEventListener('click', obtenerDatos);

