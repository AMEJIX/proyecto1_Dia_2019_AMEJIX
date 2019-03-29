'use strict'

let user = JSON.parse(sessionStorage.getItem("usuario"));

const tablaRangos = document.querySelector('#tblRangoCriteriosMEP tbody');

if(user.userType == 'padreFamilia' || user.userType == 'centroEducativo'){
    window.location.href = 'loSentimos.html';
}

let mostrarRangos = () =>{
    let rangos = listarRangos();
    
    for(let i=0; i<rangos.length; i++){
        let fila = tablaRangos.insertRow();
        fila.insertCell().innerHTML = rangos [i] ['rango'];
        fila.insertCell().innerHTML = rangos [i] ['valorMinimo'];
        fila.insertCell().innerHTML = rangos [i] ['valorMaximo'];
        fila.insertCell().innerHTML = rangos [i] ['estrellas'];
    }
};

mostrarRangos();