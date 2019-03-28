'use strict';

const selectRangos= document.querySelector('#selectRangos');
const selectValorMinimo= document.querySelector('#selectValorMinimo');
const selectValorMaximo= document.querySelector('#selectValorMaximo');
const selectEstrellas= document.querySelector('#selectEstrellas');
const botonRegistrarRango= document.querySelector('#btnRegistrarRango');

let validarRango = () =>{
    let error = false;

    if(selectRangos.value == ''){
        error = true;
        selectRangos.classList.add('errorInput');
    }else{
        selectRangos.classList.remove('errorInput');
    }

    if(selectValorMinimo.value == '' || Number(selectValorMinimo.value) > Number(selectValorMaximo.value)){
        error = true;
        selectValorMinimo.classList.add('errorInput');
    }else{
        selectValorMinimo.classList.remove('errorInput');
    }

    if(selectValorMaximo.value == '' || Number(selectValorMaximo.value) < Number(selectValorMinimo.value)){
        error = true;
        selectValorMaximo.classList.add('errorInput');
    }else{
        selectValorMaximo.classList.remove('errorInput');
    }

    if(selectEstrellas.value == ''){
        error = true;
        selectEstrellas.classList.add('errorInput');
    }else{
        selectEstrellas.classList.remove('errorInput');
    }
    
    return error;

};



let validarRangosExistentes= () =>{
    let error = false;
    let errorRango = false;
    let errorMinimo = false;
    let errorMaximo = false;
    let rango = Number(selectRangos.value);
    let minimo = Number(selectValorMinimo.value);
    let maximo = Number(selectValorMaximo.value);
    let rangoAnterior = 0, rangoPosterior = 0;   
    let valorMinimoRangoPosterior = 101;
    let valorMaximoRangoAnterior = 0; 

    let todosRangos = listarRangos();
    rangoAnterior = rango > 1 ? rango - 1 : 0;
    rangoPosterior = rango < 5 ? rango + 1 : 5;

    for(let i = 0; i < todosRangos.length; i++){
       
        if(todosRangos [i] ['rango'] == rango || todosRangos [i] ['estrellas'] == selectEstrellas.value){
            errorRango = true;
        }
        else{
            if(todosRangos [i] ['rango'] == rangoAnterior){
                valorMaximoRangoAnterior = todosRangos [i] ['valorMaximo'];
            }
            if (todosRangos [i] ['rango'] == rangoPosterior){
                valorMinimoRangoPosterior = todosRangos [i] ['valorMinimo'];
            }
        }
    }

    errorMinimo = valorMaximoRangoAnterior < minimo ? false : true;
    errorMaximo = valorMinimoRangoPosterior > maximo ? false : true;
    
    error = (errorRango == false && errorMinimo == false && errorMaximo == false) ? false : true;
    return error;
}


let obtenerDatosRango = () =>{

    if(validarRango() == false){
        if(validarRangosExistentes() == false ){
            let rango = Number(selectRangos.value);
            let valorMinimo = Number(selectValorMinimo.value);
            let valorMaximo = Number(selectValorMaximo.value);
            let estrellas = selectEstrellas.value;
    
            registrarRango(rango, valorMinimo, valorMaximo, estrellas);
        }else{
            swal.fire({
                type: 'warning',
                title: 'El rango no se registró correctamente',
                text: 'El rango y/o cantidad de estrellas ya existen, o el/los valores mínimos y máximos son incorrectos'
            });
        }
        
    }else{
        swal.fire({
            type: 'warning',
            title: 'El rango no se registró correctamente',
            text: 'Por favor revise los campos resaltados'
        });
    }
      
   
};

botonRegistrarRango.addEventListener('click', obtenerDatosRango);