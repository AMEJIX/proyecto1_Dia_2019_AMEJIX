'use strict';


const selectNivel = document.querySelector("#selectNivel");
const tabla = document.querySelector("#tblUtiles tbody");


let mostrarUtiles = () =>{

    let nivel = selectNivel.value;
    let idSA = "5c9947ace0fb7a30848f605a";
    let utiles = listarUtilesNivel(nivel, idSA);
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
// mostrar_utiles();
// boton_buscar.click(mostrar_utiles());
// boton_buscar.onclick = function() {mostrar_utiles()};
// boton_buscar.addEventListener('click', mostrar_utiles);




