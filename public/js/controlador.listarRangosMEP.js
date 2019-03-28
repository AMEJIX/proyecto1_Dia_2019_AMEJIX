'use strict'

const tablaRangos = document.querySelector('#tblRangoCriteriosMEP tbody');

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