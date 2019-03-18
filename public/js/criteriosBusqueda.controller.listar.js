'use strict';

const inputFiltrar = document.querySelector('#txtFiltrar');

let listaEtiquetas = getCriteriosBusqueda();

mostrarCriterios();

inputFiltrar.addEventListener('keyup', mostrarCriterios);

function mostrarCriterios() {

    let tabla = document.querySelector('#tblCriteriosBusqueda tbody');

    let filtro = inputFiltrar.value;

    tabla.innerHTML = '';

    for (let i = 0; i < listaEtiquetas.length; i++) {

        if (listaEtiquetas[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){


            let nuevaFila = tabla.insertRow();

            let nuevaEtiqueta = nuevaFila.insertCell();

            nuevaEtiqueta.innerHTML = listaEtiquetas[i]['nombre'];

            if(!(i + 1 < listaEtiquetas.length)){
                return;
            } else {

                i++;

                if (listaEtiquetas[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
                    let nuevaEtiqueta1 = nuevaFila.insertCell();

                    nuevaEtiqueta1.innerHTML = listaEtiquetas[i]['nombre'];
                }

            }


            if(!(i + 1<listaEtiquetas.length)){
                return;
            } else {

                i++;

                if (listaEtiquetas[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
                    let nuevaEtiqueta2 = nuevaFila.insertCell();

                    nuevaEtiqueta2.innerHTML = listaEtiquetas[i]['nombre'];
                }

            }
        }
    }

}