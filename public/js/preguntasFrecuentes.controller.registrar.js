'use strict';


const txtPregunta = document.querySelector('#txtPregunta');

const txtRespuesta = document.querySelector('#txtRespuesta');

const btnEnviar = document.querySelector('#btnEnviar');

let validar = () =>{

    let error = false;

    if (txtPregunta.value === '' || validarPregunta(txtPregunta.value)) {
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

let agregar = () =>{
    if (!validar()){
        codigo = txtPregunta.value;
        nombre = txtRespuesta.value;

        registrarPreguntaFrecuente('5c9506cdb643431b5cb7d185', codigo, nombre);

        setTimeout("location.reload()", 1500);

        // mostrarPreguntasFrecuentes();

        txtRespuesta.innerHTML = '';
        txtPregunta.innerHTML = '';

    } else {
        swal.fire(
            {
                type: 'warning',
                titile: 'Registro fallido de la pregunta frecuente',
                text: 'Asegúrese de haber llenado bien los campos y de que la pregunta no esté registrada ya en su perfil'
            }
        );
    }
};

btnEnviar.addEventListener('click', agregar);