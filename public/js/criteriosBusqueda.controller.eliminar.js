'use strict';

let eliminarEtiqueta = (pid) =>{

    Swal.fire({
        title: 'Está seguro que desea eliminar la etiqueta?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
        if (result.value) {

            deleteEtiqueta(pid);
            let elementoEliminado = document.getElementById(pid);
            elementoEliminado.parentElement.removeChild(elementoEliminado);
        } else {

        }
        // setTimeout('location.reload()', 1500);
    })

};