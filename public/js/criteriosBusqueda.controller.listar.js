'use strict';

const inputFiltrar = document.querySelector('#txtFiltrar');

let user = JSON.parse(sessionStorage.getItem('usuario'));

if(user.userType === 'padreFamilia'){
    if (location.pathname.split("/").slice(-1) !== 'loSentimos.html')  setTimeout(location.href='loSentimos.html', 0);
}

let listaEtiquetas = getCriteriosBusqueda();

insertarMensaje(`No se encontró ningún criterio de búsqueda`);

mostrarCriterios();

inputFiltrar.addEventListener('keyup', mostrarCriterios);

function mostrarCriterios() {

    let tabla = document.querySelector('#tblCriteriosBusqueda tbody');

    let filtro = inputFiltrar.value;

    tabla.innerHTML = '';

    console.log(listaEtiquetas.length);
    if (listaEtiquetas.length > 0){

        if (document.getElementById('error')) eliminarMensaje();


        for (let i = 0; i < listaEtiquetas.length; i++) {

            if (listaEtiquetas[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){

                if (document.getElementById('error')) eliminarMensaje();

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
            } else {
                if (document.getElementById('error')) eliminarMensaje();
                insertarMensaje(`No se encontró el criterio de búsqueda ${filtro}`);
            }
        }
    } else {
        if (document.getElementById('error')) eliminarMensaje();
        insertarMensaje(`No se encontraron criterios de búsqueda`);
    }


}

function eliminarMensaje() {
    document.querySelector('.contenido').removeChild(document.getElementById('error'));
}

function insertarMensaje(mensaje) {
    document.getElementById('tblCriteriosBusqueda').insertAdjacentHTML('afterend', `<p id="error" id="mensajito"> ${mensaje}</p>`);
}