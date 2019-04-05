'use strict';


let user = JSON.parse(sessionStorage.getItem("usuario"));


const tablaActividades = document.querySelector('#tblActividades tbody');
const inputFiltro = document.querySelector('#txtFiltro');
const IdGeneralCE = user._id;

if(user.userType == 'padreFamilia' || user.userType == 'superAdministrador'){
    window.location.href = 'loSentimos.html';
}

// let actividades = listarActividades();
// console.log(actividades);
// function mostrarActividades(){
let mostrarActividades = () => {
    
    let actividades = listarActividades(IdGeneralCE);
    let filtro = inputFiltro.value;
    tablaActividades.innerHTML= '';
    
    if(actividades !== "No se encontraron actividades registradas"){
        for(let i=0; i<actividades.length; i++){
            
            if(actividades[i]['actividad'].toLowerCase().includes(filtro.toLowerCase())){
                
                let fila = tablaActividades.insertRow();
                fila.insertCell().innerHTML = actividades [i] ['actividad'];
                fila.insertCell().innerHTML = actividades [i] ['descripcion'];
                fila.insertCell().innerHTML = actividades [i] ['fecha'];
                let imagenActividad = fila.insertCell();
                            
                // let imagen = document.createElement('img');
                // imagen.classList.add('celdaImagen');
                // imagen.style.display = 'inline-block';
                
                    if(actividades [i] ['imagen']){
                        let stringImg = actividades [i] ['imagen'];
                        let arregloImg = stringImg.split(",");
                        console.log(arregloImg);
                        for(let a=0; a<arregloImg.length; a++){
                            let imagen = document.createElement('img');
                            imagen.src = arregloImg [a];                            
                            imagenActividad.appendChild(imagen);                            
                            imagen.classList.add('celdaImagen');
                            imagen.style.display = 'inline-block'; 
                        }
                        // imagen.src = actividades [i] ['imagen'];
                    }else{
                        imagen.src = 'img/upload.png';
                        imagenActividad.appendChild(imagen); 
                    }
                // imagenActividad.appendChild(imagen); 
            }          
        }
    }else{
        tablaActividades.innerHTML = "No se encontraron actividades registradas";
    }
    
};

mostrarActividades();

inputFiltro.addEventListener('keyup', mostrarActividades);