'use strict'

const tablaPrueba = document.querySelector('#tblPrueba tbody');

let mostrarPrueba = () =>{
    let pruebaUtiles = listarCEducativos();
    
    for(let i=0; i<pruebaUtiles.length; i++){

        let fila = tablaPrueba.insertRow();
        let nombre = fila.insertCell();
        // let idPrueba = fila.insertCell();

        let nombre2 = document.createElement('a');
        nombre2.innerHTML= pruebaUtiles[i] ['centroEducativo'];
        
        nombre2.href = 'perfilCentroPrueba.html?idCE=' + pruebaUtiles [i] ['_id'];        
        nombre2.value =  pruebaUtiles [i] ['_id'];
        nombre.appendChild(nombre2);
        


        // let prueba = document.createElement('input');
        // prueba.value = pruebaUtiles [i] ['_id'];
        // idPrueba.appendChild(prueba);        
        // prueba.classList.add('prueba');
        // prueba.id = 'inputIDprueba';
        

         
    }
};

mostrarPrueba();