'use strict';

const inputFiltrar = document.querySelector('#inputBuscar')
// let user = JSON.parse(sessionStorage.getItem("usuario"));
// let idUsuarioCE = user._id;

/**************************************************************************************************************/

if (user.userType != "centroEducativo") {
    idUsuarioCE = IdGeneralCE;
} else {

}

/**************************************************************************************************************/

let becas = listarBecas(idUsuarioCE);
inputFiltrar.addEventListener('keyup', mostrarBecas);

/**************************************************************************************************************/

function mostrarBecas() {

    const tabla = document.querySelector('#tblBecas tbody');
    const filtro = inputFiltrar.value;

    tabla.innerHTML = '';
    for (let i = 0; i < becas.length; i++) {

        if (becas[i]['nombreBeca'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = becas[i]['nombreBeca'];
            fila.insertCell().innerHTML = becas[i]['descripcionBeca'];
        }
    }
}

mostrarBecas();

inputFiltrar.addEventListener('keyup', mostrarBecas);

/**************************************************************************************************************/

let eliminarBecas = (p_id) => {
    Swal.fire({
        title: '¿Está seguro que desea eliminar la beca?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.value) {
            eliminarBeca(p_id);
        } else {
        }

    })

}