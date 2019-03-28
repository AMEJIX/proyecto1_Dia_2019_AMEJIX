'use strict';

const tabla = document.querySelector('#tblUsuarios tbody');
const inputFiltro = document.querySelector('#txtFiltro');

let usuarios = listarUsuariosPF();
mostrarDatos();

inputFiltro.addEventListener('keyup', mostrarDatos);

function mostrarDatos() {

    let usuarios = listarUsuariosPF();
    let filtro = inputFiltro.value;
    tabla.innerHTML = '';

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();
            let nombre = fila.insertCell();
            fila.insertCell().innerHTML = usuarios[i]['identificacion'];

            let cEElementa = document.createElement('a');
            cEElementa.innerHTML= usuarios[i]['nombre'];
            cEElementa.href = 'profileInfoPF.html?idCE=' + usuarios [i] ['_id'];        
            cEElementa.value =  usuarios [i] ['_id'];
            nombre.appendChild(cEElementa);
        } 
    }
};