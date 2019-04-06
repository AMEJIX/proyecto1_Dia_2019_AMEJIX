'use strict';

let user = JSON.parse(sessionStorage.getItem("usuario"));

const tabla = document.querySelector("#tblArticulos tbody");
const inputFiltro = document.querySelector('#txtFiltro');
const IdGeneralCE = user._id;

if(user.userType == 'padreFamilia'){
    window.location.href = 'loSentimos.html';
}

let articulos = listarArticulos(); 

let mostrarArticulos = () =>{  
       
        let articulos = listarArticulos(IdGeneralCE);
        
        let filtro = inputFiltro.value;                
        tabla.innerHTML = '';

    if (articulos !== "No se encontraron artículos escolares registrados") {
        
        for (let i = 0; i < articulos.length; i++) {
            if(articulos[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())) {
                

                let fila = tabla.insertRow();
                fila.insertCell().innerHTML = articulos[i]['nombre'];
                fila.insertCell().innerHTML = articulos[i]['descripcion'];
            }

        };

    }else{
        tabla.innerHTML = "No se encontraron artículos escolares registrados";
    }
          
};

mostrarArticulos();

inputFiltro.addEventListener('keyup', mostrarArticulos);






