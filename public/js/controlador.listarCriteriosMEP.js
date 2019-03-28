'use strict'

const tablaCriterios = document.querySelector('#tblCriteriosMEP tbody');

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

