'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));

const tabla = document.querySelector('#tblUsuarios tbody');
const inputFiltro = document.querySelector('#txtFiltro');

if(user.userType == 'centroEducativo'){
    window.location.href = 'loSentimos.html';
}
let usuarios = listarUsuariosCE();
mostrarDatos();

inputFiltro.addEventListener('keyup', mostrarDatos);

function mostrarDatos() {

    
    let filtro = inputFiltro.value;
    tabla.innerHTML = '';

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i]['centroEducativo'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();

            // fila.insertCell().innerHTML = usuarios[i]['centroEducativo'];
            let nombre = fila.insertCell();
            fila.insertCell().innerHTML = usuarios[i]['telCE'];
            fila.insertCell().innerHTML = usuarios[i]['tipo'];
            fila.insertCell().innerHTML = usuarios[i]['provincia'];


            let cEElementa = document.createElement('a');
            cEElementa.innerHTML= usuarios[i] ['centroEducativo'];
            cEElementa.href =
                'profileInfoCE.html?idCE=' + usuarios [i] ['_id'] + '&centroEducativo=' + usuarios [i] ['centroEducativo'];
            cEElementa.value =  usuarios [i] ['_id'];
            
            nombre.appendChild(cEElementa);
        }
    }
};



// de EVELYN
// 'use strict'

// const tablaPrueba = document.querySelector('#tblPrueba tbody');

// let mostrarPrueba = () =>{
//     let pruebaUtiles = listarCEducativos();
    
//     for(let i=0; i<pruebaUtiles.length; i++){

//         let fila = tablaPrueba.insertRow();

//         let nombre = fila.insertCell();
//         // let idPrueba = fila.insertCell();

//         let cEElementa = document.createElement('a');
//         cEElementa.innerHTML= usuarios[i] ['centroEducativo'];
//         cEElementa.href = 'perfilCentroPrueba.html?idCE=' + usuarios [i] ['_id'];        
//         cEElementa.value =  usuarios [i] ['_id'];
//         nombre.appendChild(cEElementa);
        


//         // let prueba = document.createElement('input');
//         // prueba.value = pruebaUtiles [i] ['_id'];
//         // idPrueba.appendChild(prueba);        
//         // prueba.classList.add('prueba');
//         // prueba.id = 'inputIDprueba';
        

         
//     }
// };

// mostrarPrueba();