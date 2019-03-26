'use strict';

let nombrePerfil = document.querySelector('.userInfo h4');

let usuario = JSON.parse(sessionStorage.getItem('usuario'));

window.onload = function() {
    let nombre = '';
    if (usuario.userType === 'padreFamilia' || usuario.userType === 'superAdministrador') {
        nombre += usuario.nombre;
        if (usuario.segundoNombre) {
            nombre = " " + usuario.segundoNombre;
        }
        nombre += " " + usuario.apellido;

        if (usuario.segundoApellido) {
            nombre += " " + usuario.segundoApellido;
        }
    } else {
        nombre = usuario.centroEducativo;
    }
    nombrePerfil.innerHTML = nombre;
};