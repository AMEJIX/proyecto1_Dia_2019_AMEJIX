'use strict';

'use strict';

let actualizarPregunta = (ppregunta, prespuesta, pid, ppreguntaAnterior, prespuestaAnterior) =>{

    Swal.fire({
        title: 'Está seguro que desea modificar la pregunta?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#f9aa33',
        cancelButtonColor: '#dddddd',
        confirmButtonText: 'Sí, modificar'
    }).then((result) => {
        if (result.value) {
            modificarPregunta(ppregunta, prespuesta, pid);
            document.getElementById(`pregunta_${pid}`).contentEditable = false;
            // document.getElementById(`etiqueta_${pid}`).style.background = 'inherit';
        } else {
            document.getElementById(`pregunta_${pid}`).textContent = ppreguntaAnterior;
            document.getElementById(`respuesta_${pid}`).textContent = prespuestaAnterior;
            document.getElementById(`pregunta_${pid}`).contentEditable = false;
            // document.getElementById(`etiqueta_${pid}`).style.background = 'inherit';
        }
        // setTimeout('location.reload()', 1500);
    })

};