'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));
// let centroEducativo = listarUsuariosCEencabezado(IdGeneralCE);

// const tablaComentarios = document.querySelector('#tblComentarios tbody');
let comentarios = listaComentariosUser(IdGeneralCE);
const cajaComentarios = document.querySelector('#cajaComentarios');


console.log(comentarios);


let mostrarComentarios = () => {

    for (let i = 0; i < comentarios.length; i++) {

        let commentInfo = document.createElement('div');
        commentInfo.classList.add('commentInfo');

        let userPic = document.createElement('div');
        userPic.classList.add('userPic');

        if (comentarios[i]['userPhoto'] === ''){
            comentarios[i]['userPhoto'] = 'img/icons8-user.png'
        }

        userPic.style.backgroundImage = `url(${comentarios[i]['userPhoto']})`;

        let userName = document.createElement('h3');
        userName.classList.add('userName');
        userName.textContent = comentarios[i]['userName'];

        let comment = document.createElement('p');
        comment.classList.add('comment');
        comment.textContent = comentarios[i]['comment'];

        commentInfo.appendChild(userPic);
        commentInfo.appendChild(userName);

        cajaComentarios.appendChild(commentInfo);
        cajaComentarios.appendChild(comment);
    };
};

mostrarComentarios();