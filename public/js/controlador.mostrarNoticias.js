'use strict';

const inputFiltrar = document.querySelector('#inputBuscar');
let user = JSON.parse(sessionStorage.getItem("usuario"));
let idUsuarioCE = user._id;

/**************************************************************************************************************/

if (user.userType != "centroEducativo") {
    idUsuarioCE = IdGeneralCE;
} else {

}

/**************************************************************************************************************/

let noticias = listarNoticias(idUsuarioCE);
inputFiltrar.addEventListener('keyup', mostrarNoticias);

/**************************************************************************************************************/

function mostrarNoticias() {

    const tabla = document.querySelector('#tblNoticias tbody');
    const filtro = inputFiltrar.value;

    tabla.innerHTML = '';
    for (let i = 0; i < noticias.length; i++) {

        if (noticias[i]['tituloNoticia'].toLowerCase().includes(filtro.toLowerCase())) {

            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = noticias[i]['tituloNoticia'];
            fila.insertCell().innerHTML = noticias[i]['fechaNoticia'];
            fila.insertCell().innerHTML = noticias[i]['registrarNoticia'];

            let celdaConfiguracion = fila.insertCell();
            let celdaEliminar = fila.insertCell();

            let botonEditar = document.createElement('a');
            botonEditar.textContent = 'Editar';
            botonEditar.href = `editarNoticias.html?idNoticia=${noticias[i]['_id']}`;

            celdaConfiguracion.appendChild(botonEditar);
            let botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.id = 'btnEliminar';
            botonEliminar.addEventListener('click', eliminar => {
                eliminarNoticias(noticias[i]['_id']);
            });
            celdaEliminar.appendChild(botonEliminar);
        }

    }
}
mostrarNoticias();

inputFiltrar.addEventListener('keyup', mostrarNoticias);

/**************************************************************************************************************/

let eliminarNoticias = (p_id) => {
    Swal.fire({
        title: '¿Está seguro que desea eliminar la noticia?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.value) {
            eliminarNoticia(p_id);
        } else {
        }

    })

}