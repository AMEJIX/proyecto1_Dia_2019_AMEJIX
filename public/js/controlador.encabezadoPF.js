'use strict';

let mostrarDatosPF = () => {
    let padreFamilia = listarUsuariosPFencabezado(IdGeneralCE);

    console.log(padreFamilia);

    let foto = document.querySelector('.photoPF');
    let nombre = document.querySelector('.infoPFAdentro h2');
    let direccion = document.querySelector('.infoPFAdentro h3');

    foto.src = padreFamilia[0]['imagenPF'];
    nombre.textContent = padreFamilia[0]['nombre'];
    direccion.textContent = padreFamilia[0]['canton'];

    if (foto.src == ''){
        foto.src = 'img/icons8-user.png'
    }
    foto.style.backgroundImage = `url(${foto.src})`;

};

mostrarDatosPF();