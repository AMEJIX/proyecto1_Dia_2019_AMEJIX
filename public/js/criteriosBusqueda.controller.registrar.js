'use strict';

const inputEtiqueta = document.querySelector('#txtNombreEtiqueta');
const btnAgregar = document.querySelector('#btnAgregar');

let validar = () =>{

    let error = false;

    if (inputEtiqueta.value === ''){
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

        registrarCriterioBusqueda(nombre);

        setTimeout("location.reload()", 1500);
    } else {

        swal.fire(
            {
                type: 'warning',
                title: 'Registro fallido de la etiqueta',
                text: 'Asegúrese de haber agregado un nombre'
            }
        );
    }
};

btnAgregar.addEventListener('click', agregar);