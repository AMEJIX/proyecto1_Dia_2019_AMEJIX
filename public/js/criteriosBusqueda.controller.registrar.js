'use strict';

const inputEtiqueta = document.querySelector('#txtNombreEtiqueta');
const btnAgregar = document.querySelector('#btnAgregar');

let validar = () =>{

    let error = false;

    if (inputEtiqueta.value === '' || validarEtiqueta()){
        error = true;
        inputEtiqueta.classList.add('errorInput');
    } else {
        inputEtiqueta.classList.remove('errorInput');
    }

    return error;
};

let agregar = () =>{

    if (!validar()){
        let nombre = inputEtiqueta.value;

        inputEtiqueta.value = '';

        registrarCriterioBusqueda(nombre);

        setTimeout("location.reload()", 1500);
    } else {

        swal.fire(
            {
                type: 'warning',
                title: 'Registro fallido de la etiqueta',
                text: 'Asegúrese de haber llenado el campo o que la etiqueta no exista'
            }
        );
    }
};

btnAgregar.addEventListener('click', agregar);