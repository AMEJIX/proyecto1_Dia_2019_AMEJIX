'use strict';

let user = JSON.parse(sessionStorage.getItem("usuario"));

const inputActividad = document.querySelector('#txtActividad');
const inputDescripcion = document.querySelector('#txtDescripcion');
const inputFecha = document.querySelector('#inputFecha');
const imagenActividad = document.querySelector('#imgActividades');
const botonRegistrar = document.querySelector('#btnRegistrar');
const idCE = user._id;

if(user.userType == 'padreFamilia'){
    window.location.href = 'loSentimos.html';
}


let validar = () =>{
    let error = false;

    if(inputActividad.value == ''){
        error = true;
        inputActividad.classList.add('errorInput');
    }else{
        inputActividad.classList.remove('errorInput');
    }

    if(inputDescripcion.value == ''){
        error = true;
        inputDescripcion.classList.add('errorInput');
    }else{
        inputDescripcion.classList.remove('errorInput');
    }

    if(inputFecha.value == ''){
        inputFecha.classList.add('errorInput');        
    }else{
        inputFecha.classList.remove('errorInput');
    }
  
    return error;

};


function obtenerDatosActividad(){
    if(validar() == false){
        let actividad = inputActividad.value;
        let descripcion = inputDescripcion.value;
        let fecha = inputFecha.value;
        let imagen = imagenActividad.src;
        let idCentroEducativo = idCE;

        registrarActividad(actividad, descripcion, fecha, imagen, idCentroEducativo);

    }else{
        swal.fire({
            type: 'warning',
            title: 'La actividad no se registró correctamente',
            text: 'Por favor revise los campos resaltados'
        });
    }
}

botonRegistrar.addEventListener('click', obtenerDatosActividad);

