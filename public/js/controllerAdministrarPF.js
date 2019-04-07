'use strict';

let user = JSON.parse(sessionStorage.getItem("usuario"));

const tabla = document.querySelector('#tblUsuarios tbody');
const inputFiltro = document.querySelector('#txtFiltro');

if (user.userType == 'centroEducativo' || user.userType == 'padreFamilia') {
    window.location.href = 'loSentimos.html';
}
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
  
            fila.insertCell().innerHTML = usuarios[i]['provincia'];
            let celdaEstado = fila.insertCell();
            let celdaActualizar = fila.insertCell();
            let celdaEliminar = fila.insertCell();


            let cEElementa = document.createElement('a');
            cEElementa.innerHTML= usuarios[i]['nombre'];
            cEElementa.href = 'profileInfoPF.html?idCE=' + usuarios [i] ['_id'];        
            cEElementa.value =  usuarios [i] ['_id'];
            nombre.appendChild(cEElementa);


            let inputEstado = document.createElement("input");
            inputEstado.value = usuarios[i]['estado'];
            celdaEstado.appendChild(inputEstado);

            let actualizar = document.createElement('a');
            actualizar.classList.add('aActualizarEstado');
            actualizar.textContent = 'Actualizar';
            actualizar.href = `#`;
            celdaActualizar.appendChild(actualizar);

            let eliminar = document.createElement('a');
            eliminar.classList.add('eliminarUsuario');
            eliminar.textContent = 'Eliminar';
            eliminar.href = `#`;
            celdaEliminar.appendChild(eliminar);

        
           
            let id = usuarios[i]['_id'];
            let nombrePF = usuarios[i]['nombre'];

            let validarPF = () => {
                let error = false;

                if (inputEstado.value == 'Activo' || inputEstado.value == 'Inactivo' || inputEstado.value == 'Pendiente') {
                    inputEstado.classList.remove('errorInput');
                } else {
                    error = true;
                    inputEstado.classList.add('errorInput');
                }

                return error;
            }

            function obtenerDatosPF() {

              

                if (!validarPF()) {
                    let estado = inputEstado.value;
                    console.log(estado);
                    actualizarEstadoSolicitud(estado, id)

                } else {

                    swal.fire({
                        type: 'warning',
                        title: 'No se pudo actualizar el estado',
                        text: `El estad debe ser "Activo" - "Pendiente" - "Inactivo"`,

                    });
                }

            }


            function eliminarPF() {
                eliminarUsuario(nombrePF,id);

            }
            actualizar.addEventListener('click', obtenerDatosPF);
            eliminar.addEventListener('click', eliminarPF);


        }
    }
};

