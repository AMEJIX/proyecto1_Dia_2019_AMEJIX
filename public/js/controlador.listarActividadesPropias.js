'use strict';


let user = JSON.parse(sessionStorage.getItem("usuario"));


const tablaActividades = document.querySelector('#tblActividades tbody');
const inputFiltro = document.querySelector('#txtFiltro');
const IdGeneralCE = user._id;

let actividades = listarActividades();

// function mostrarActividades(){
let mostrarActividades = () => {
    
    let actividades = listarActividades(IdGeneralCE);
    let filtro = inputFiltro.value;
    tablaActividades.innerHTML= '';
    
    for(let i=0; i<actividades.length; i++){

        if(actividades[i]['actividad'].toLowerCase().includes(filtro.toLowerCase())){
            let fila = tablaActividades.insertRow();
            fila.insertCell().innerHTML = actividades [i] ['actividad'];
            fila.insertCell().innerHTML = actividades [i] ['descripcion'];
            fila.insertCell().innerHTML = actividades [i] ['fecha'];
            let imagenActividad = fila.insertCell();
                        
            let imagen = document.createElement('img');
            imagen.classList.add('celdaImagen');
                if(actividades [i] ['imagen']){
                    imagen.src = actividades [i] ['imagen'];
                }else{
                    imagen.src = 'img/upload.png';
                }
            imagenActividad.appendChild(imagen); 
        }          
    }
};

mostrarActividades();

inputFiltro.addEventListener('keyup', mostrarActividades);