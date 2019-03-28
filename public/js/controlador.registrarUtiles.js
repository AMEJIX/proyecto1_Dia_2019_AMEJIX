'use strict';

let user = JSON.parse(sessionStorage.getItem("usuario"));

const inputNombre = document.querySelector('#txtNombre');
const inputDescripcion = document.querySelector('#txtDescripcion');
const inputCantidad = document.querySelector('#txtCantidad');
const selectNivel = document.querySelector('#selectNivel');
const botonRegistrar = document.querySelector('#btnRegistrar');
const idCE = user._id;

let validar = () =>{
    let error = false;
    if(inputNombre.value == ''){
        error = true;
        inputNombre.classList.add('errorInput');
    }else{
        inputNombre.classList.remove('errorInput');
    }

    if(inputDescripcion.value == ''){
        error = true;
        inputDescripcion.classList.add('errorInput');
    }else{
        inputDescripcion.classList.remove('errorInput');
    }

    if(inputCantidad.value == ''){
        error = true;
        inputCantidad.classList.add('errorInput');
    }else{
        inputCantidad.classList.remove('errorInput');
    }

    if(selectNivel.value == ''){
        error = true;
        selectNivel.classList.add('errorInput');
    }else{
        selectNivel.classList.remove('errorInput');
    }
    return error;
    
};

let obtenerDatos = () =>{
    if(validar() == false){
        let nombre = inputNombre.value;
        let descripcion = inputDescripcion.value;
        let cantidad = inputCantidad.value;
        let nivel = selectNivel.value;
        let idCentroEducativo = idCE;

        registrarUtil(nombre, descripcion, cantidad, nivel, idCentroEducativo);
        
    }else{
        swal.fire({
            type: 'warning',
            title: 'El útil no se registró correctamente',
            text: 'Por favor revise los campos resaltados'
        });
    }
};

botonRegistrar.addEventListener('click', obtenerDatos);

