'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));
// let centroEducativo = listarUsuariosCEencabezado(IdGeneralCE);

let divComentario = document.querySelector('#cajaComentarios');

let mostrarComentarios = () => {
    let comentarios = listarComentariosUser(centroEducativo);
    divComentario.innerHTML = '';

    let commentInfo = document.createElement('div');
    commentInfo.classList.add('commentInfo');

    let userPic = document.createElement('div');
    userPic.classList.add('userPic');
    userPic.src = user.imagenPF;

    let userName = document.createElement('h3');
    userName.classList.add('userName');
    userName.textContent = user.nombre += " " + user.apellido;

    // ESTRELLAS PENDIENTES

    let comment= document.createElement('p');
    comment.classList.add('comment');
    comment.textContent = listarComentariosUser[0]['comment'];

    divComentario.appendChild(comment);

    divComentario.appendChild(commentInfo);

    commentInfo.appendChild(userPic);

    commentInfo.appendChild(userName);
    
};
console.log(listarComentariosUser[0]['comment']);


// let comentarios = listarComentariosUser(centroEducativo);
// let nombreUser = user.nombre += " " + user.apellido;
// let photoPF = document.querySelector('.userPic');



// if (comentarios !== "No se encontraron comentarios registrados") {
//     for (let i = 0; i < comentarios.length; i++) {
//         photoPF.src = user.imagenPF;
//     }
// } else {

// }