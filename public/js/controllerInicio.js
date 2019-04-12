
'use strict'

const inputUsuario = document.querySelector('#txtUsuario');
const inputPW = document.querySelector('#txtPW');
const btnIniciar = document.querySelector('#btnIniciar');

function obtenerDatos(){

    let usuario = inputUsuario.value;
    let contrasenna = inputPW.value;

    let errorBlanks = validar(usuario, contrasenna);

    if (!errorBlanks) {
         validarCredenciales(usuario, contrasenna, function(res) {
            if (res.success) {



                console.log('redirección');
                window.location.href = 'userProfileInfo.html';
            } else {
                swal.fire({
                    type: 'warning',
                    title: res.msg,
                });
            }
        });
    }

}

function validar(usuario, contrasenna) {

    let error = false;

    if (usuario == '') {
        error = true;
        inputUsuario.classList.add('errorInput')
    } else {
        inputUsuario.classList.remove('errorInput')
    }

    if (contrasenna == '') {
        error = true;
        inputPW.classList.add('errorInput')
    } else {
        inputPW.classList.remove('errorInput')
    }


    return error;
}

btnIniciar.addEventListener('click', obtenerDatos);