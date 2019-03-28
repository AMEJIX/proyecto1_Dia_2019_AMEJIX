'use strict';

let user = JSON.parse(sessionStorage.getItem("usuario"));

const selectNivel = document.querySelector("#selectNivel");
const tabla = document.querySelector("#tblUtiles tbody");
const IdGeneralCE = user._id;

let utiles = listarUtilesNivel(); 

let mostrarUtiles = () =>{  

        let nivel = selectNivel.value;
        let utiles = listarUtilesNivel(nivel, IdGeneralCE);        
        tabla.innerHTML = '';
        for(let i=0; i<utiles.length; i++){
            if(utiles[i]['nivel'] == nivel){
                let fila = tabla.insertRow();
                fila.insertCell().innerHTML = utiles [i]  ['nombre'];
                fila.insertCell().innerHTML = utiles [i]  ['descripcion'];
                fila.insertCell().innerHTML = utiles [i]  ['cantidad'];
            }else{                
                tabla.innerHTML = 'No existen útiles registrados para este nivel';  
            }         
        };   
};

selectNivel.addEventListener('click', mostrarUtiles);