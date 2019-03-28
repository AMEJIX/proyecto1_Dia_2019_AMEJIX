'use strict';

const tabla = document.querySelector('#tblMaterialInformativo tbody');
const inputFiltro = document.querySelector('#txtFiltro');

let temas = listarMaterial();
mostrarDatos();

inputFiltro.addEventListener('keyup', mostrarDatos);

function mostrarDatos() {

    tabla.innerHTML = '';
    let filtro = inputFiltro.value;

    for (let i = 0; i < temas.length; i++) {

        if (temas[i]['tema'].toLowerCase().includes(filtro.toLowerCase()) || temas[i]['descripcion'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = temas[i]['tema'];
            fila.insertCell().innerHTML = temas[i]['descripcion'];
            let imagenTema = fila.insertCell();

            let imagen = document.createElement('img');
            imagen.classList.add('celdaImagen');
            console.log(temas[i]['file']);
            if (temas[i]['file'] || !temas[i]['file'] instanceof HTMLElement) {
                imagen.src = temas[i]['file'];
            } else {
                imagen.src = 'img/imageHolder.png';
            }
            imagenTema.appendChild(imagen);
        } 
    };
}