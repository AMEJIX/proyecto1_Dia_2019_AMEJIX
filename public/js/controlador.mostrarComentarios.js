'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));
// let centroEducativo = listarUsuariosCEencabezado(IdGeneralCE);

// const tablaComentarios = document.querySelector('#tblComentarios tbody');
let comentarios = listaComentariosUser(IdGeneralCE);

const cajaComentarios = document.querySelector('#cajaComentarios');
const registrarComentarios = document.querySelector('#registrarComentarioDiv');

console.log(comentarios);

let mostrarComentarios = () => {

    for (let i = 0; i < comentarios.length; i++) {


        let commentInfo = document.createElement('div');
        commentInfo.classList.add('commentInfo');

        let userPic = document.createElement('div');
        userPic.classList.add('userPic');

        if (comentarios[i]['userPhoto'] === '') {
            comentarios[i]['userPhoto'] = 'img/icons8-user.png'
        }

        userPic.style.backgroundImage = `url(${comentarios[i]['userPhoto']})`;

        let userName = document.createElement('h3');
        userName.classList.add('userName');
        userName.textContent = comentarios[i]['userName'];

        let starsRate = document.createElement('div');
        starsRate.classList.add('starrr');

        $('.starrr').starrr({
            rating: comentarios[i]['stars'],
            readOnly: true
        });

        console.log(comentarios[i]['stars']);

        let comment = document.createElement('p');
        comment.classList.add('comment');
        comment.textContent = comentarios[i]['comment'];

        if (user.userType == "superAdministrador") {
            registrarComentarios.style.display = 'none';

            let botonEliminar = document.createElement('button');
            botonEliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
            botonEliminar.id = 'btnEliminar';
            botonEliminar.classList.add('btnEliminar');

            botonEliminar.addEventListener('click', eliminar => {
                eliminarComentario(comentarios[i]['_id']);
            });
            comment.appendChild(botonEliminar);
        }

        commentInfo.appendChild(userPic);
        commentInfo.appendChild(userName);


        cajaComentarios.appendChild(commentInfo);
        cajaComentarios.appendChild(starsRate);
        cajaComentarios.appendChild(comment);
    };
};

mostrarComentarios();

let eliminarComentarios = (p_id) => {
    Swal.fire({
        title: '¿Está seguro que desea eliminar el comentario?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.value) {
            eliminarComentario(p_id);
        } else {
        }

    })

};