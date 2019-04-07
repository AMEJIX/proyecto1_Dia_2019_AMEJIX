'use strict';

let actualizarEtiqueta = (pnombre, pid, pnombreAnterior) =>{

    Swal.fire({
        title: 'Está seguro que desea modificar la etiqueta?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#f9aa33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, modificar'
    }).then((result) => {
        if (result.value) {
            modificarEtiqueta(pnombre, pid);
            document.getElementById(`etiqueta_${pid}`).contentEditable = false;
            // document.getElementById(`etiqueta_${pid}`).style.background = 'inherit';
        } else {
            document.getElementById(`etiqueta_${pid}`).textContent = pnombreAnterior;
            document.getElementById(`etiqueta_${pid}`).contentEditable = false;
            // document.getElementById(`etiqueta_${pid}`).style.background = 'inherit';
        }
        // setTimeout('location.reload()', 1500);
    })

};