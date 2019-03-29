'use strict'
let user = JSON.parse(sessionStorage.getItem("usuario"));
const tablaCriterios = document.querySelector('#tblCriteriosMEP tbody');

if(user.userType == 'centroEducativo' || user.userType == 'padreFamilia'){
    window.location.href = 'loSentimos.html';
}

let mostrarCriterios = () => {
    let criterios = listarCriterios();
    
    for(let i=0; i<criterios.length; i++){
        let fila = tablaCriterios.insertRow();
        fila.insertCell().innerHTML = criterios [i] ['criterio'];
        fila.insertCell().innerHTML = criterios [i] ['descripcion'];
        fila.insertCell().innerHTML = criterios [i] ['puntaje'];
    }
};

mostrarCriterios();

