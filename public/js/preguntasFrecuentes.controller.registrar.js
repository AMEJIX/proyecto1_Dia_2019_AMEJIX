'use strict';

const txtPregunta = document.querySelector('#txtPregunta');
const txtRespuesta = document.querySelector('#txtRespuesta');

const btnEnviar = document.querySelector('#btnEnviar');

let validar = () =>{

    let error = false;

    if (txtPregunta.value === '') {
        error = true;
        txtPregunta.classList.add('errorInput');
        txtPregunta.classList.remove('successInput');
    } else {
        txtPregunta.classList.remove('errorInput');
        txtPregunta.classList.add('successInput');
    }

    if (txtRespuesta.value === '') {
        error = true;
        txtRespuesta.classList.add('errorInput');
        txtRespuesta.classList.remove('successInput');
    } else {
        txtRespuesta.classList.remove('errorInput');
        txtRespuesta.classList.add('successInput');
    }
    
    return error;
};

let codigo, nombre;

let agregarEditorial = () =>{
    if (!validar()){
        codigo = txtPregunta.value;
        nombre = txtRespuesta.value;

        registrarPreguntaFrecuente(codigo, nombre);

        setTimeout("location.href='perfil.html'", 1500);

        // mostrarPreguntasFrecuentes();

        txtRespuesta.innerHTML = '';
        txtPregunta.innerHTML = '';

    } else {
        swal.fire(
            {
                type: 'warning',
                titile: 'Registro fallido de la pregunta frecuente',
                text: 'Asegúrese de haber llenado bien los campos'
            }
        );
    }
};

btnEnviar.addEventListener('click', agregarEditorial);