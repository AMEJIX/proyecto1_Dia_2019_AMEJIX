'use strict';

let eliminarPregunta = (pid) =>{

    Swal.fire({
        title: 'Está seguro que desea eliminar la pregunta?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.value) {

            deletePregunta(pid);
            let elementoEliminado = document.getElementById(pid);
            elementoEliminado.parentElement.removeChild(elementoEliminado);
        } else {

        }
        // setTimeout('location.reload()', 1500);
    })

};