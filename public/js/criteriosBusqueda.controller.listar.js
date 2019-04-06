'use strict';

const inputFiltrar = document.querySelector('#txtFiltrar');

let user = JSON.parse(sessionStorage.getItem('usuario'));

if(user.userType === 'padreFamilia'){
    if (location.pathname.split("/").slice(-1) !== 'loSentimos.html')  setTimeout(location.href='loSentimos.html', 0);
}

if (user.userType === 'centroEducativo'){
    document.querySelector('#nueva').style.display = 'none';
    document.querySelector('form').style.display = 'none';
    document.querySelector('button').style.display = 'none';
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
    if (listaEtiquetas.length > 0 || !(typeof listaCitas == 'string')){

        if (document.getElementById('error')) eliminarMensaje();


        for (let i = 0; i < listaEtiquetas.length; i++) {

            if (listaEtiquetas[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){

                if (document.getElementById('error')) eliminarMensaje();

                let nuevaFila = tabla.insertRow();

                let nuevaEtiqueta = nuevaFila.insertCell();
                let etiquetap = document.createElement('p');
                etiquetap.textContent = listaEtiquetas[i]['nombre'];
                etiquetap.id = `etiqueta_${listaEtiquetas[i]['_id']}`;
                let contenido = etiquetap.textContent;
                nuevaEtiqueta.appendChild(etiquetap);
                nuevaEtiqueta.id = listaEtiquetas[i]['_id'];
                // nuevaEtiqueta.innerHTML = listaEtiquetas[i]['nombre'];
                // nuevaEtiqueta.classList.add('chips');
                if (user.userType === 'superAdministrador') {
                        nuevaEtiqueta.insertAdjacentHTML('beforeend', `<div class="opciones" id="opciones_${listaEtiquetas[i]['_id']}"><div class="awesome_images"></i><i class="fas fa-edit modificar" id="modificar_${nuevaEtiqueta.id}"></i><i class="fas fa-trash-alt eliminar" id="eliminar_${nuevaEtiqueta.id}"></i></div></div>`);

                    nuevaEtiqueta.addEventListener('mouseover', mostrar =>{
                        document.getElementById(`opciones_${nuevaEtiqueta.id}`).style.display = 'inline-block';
                        let botonModificar = document.getElementById(`modificar_${nuevaEtiqueta.id}`);
                        let botonEliminar = document.getElementById(`eliminar_${nuevaEtiqueta.id}`);
                        let z = 2;
                        botonModificar.addEventListener('click', activarCampoTexto =>{
                            if (z % 2 === 0) {
                                etiquetap.contentEditable = true;
                                etiquetap.style.background = '#f9aa33';
                                etiquetap.selected = true;
                                $(`#${etiquetap.id}`).keypress(function(e) {
                                    var keycode = (e.keyCode ? e.keyCode : e.which);
                                    console.log(keycode);
                                    if (keycode == '13') {
                                        actualizarEtiqueta(etiquetap.textContent, nuevaEtiqueta.id, contenido);
                                        e.preventDefault();
                                        return false;
                                    }
                                });
                            }
                            z++;
                        });
                        botonEliminar.addEventListener('click', activarCampoTexto =>{
                            eliminarEtiqueta(nuevaEtiqueta.id);
                        });
                    });
                    nuevaEtiqueta.addEventListener('mouseleave', eliminar =>{
                        document.getElementById(`opciones_${nuevaEtiqueta.id}`).style.display  = 'none';
                        etiquetap.style.background = 'inherit';
                    });
                }

                if(!(i + 1 < listaEtiquetas.length)){
                    return;
                } else {

                    i++;

                    if (listaEtiquetas[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
                        let nuevaEtiqueta1 = nuevaFila.insertCell();
                        let etiquetap1 = document.createElement('p');
                        etiquetap1.textContent = listaEtiquetas[i]['nombre'];
                        etiquetap1.id = `etiqueta_${listaEtiquetas[i]['_id']}`;
                        let contenido1 = etiquetap1.textContent;
                        nuevaEtiqueta1.appendChild(etiquetap1);
                        // nuevaEtiqueta1.innerHTML = listaEtiquetas[i]['nombre'];
                        nuevaEtiqueta1.id = listaEtiquetas[i]['_id'];
                        // nuevaEtiqueta1.classList.add('chips');
                        if (user.userType === 'superAdministrador') {
                            nuevaEtiqueta1.insertAdjacentHTML('beforeend', `<div class="opciones" id="opciones_${listaEtiquetas[i]['_id']}"><div class="awesome_images"></i><i class="fas fa-edit modificar" id="modificar_${nuevaEtiqueta1.id}"></i><i class="fas fa-trash-alt eliminar" id="eliminar_${nuevaEtiqueta1.id}"></i></div></div>`);

                            nuevaEtiqueta1.addEventListener('mouseover', mostrar =>{
                                document.getElementById(`opciones_${nuevaEtiqueta1.id}`).style.display = 'inline-block';
                                let botonModificar = document.getElementById(`modificar_${nuevaEtiqueta1.id}`);
                                let botonEliminar = document.getElementById(`eliminar_${nuevaEtiqueta1.id}`);
                                let z = 2;
                                botonModificar.addEventListener('click', activarCampoTexto =>{
                                    if (z % 2 === 0) {
                                        etiquetap1.contentEditable = true;
                                        etiquetap1.style.background = '#f9aa33';
                                        etiquetap1.selected = true;
                                        $(`#${etiquetap1.id}`).keypress(function(e) {
                                            var keycode = (e.keyCode ? e.keyCode : e.which);
                                            console.log(keycode);
                                            if (keycode == '13') {
                                                actualizarEtiqueta(etiquetap1.textContent, nuevaEtiqueta1.id, contenido1);
                                                e.preventDefault();
                                                return false;
                                            }
                                        });
                                    }
                                    z++;
                                });
                                botonEliminar.addEventListener('click', activarCampoTexto =>{
                                    eliminarEtiqueta(nuevaEtiqueta1.id);
                                });
                            });
                            nuevaEtiqueta1.addEventListener('mouseleave', eliminar =>{
                                document.getElementById(`opciones_${nuevaEtiqueta1.id}`).style.display  = 'none';
                                etiquetap1.style.background = 'inherit';
                            });
                        }
                    }
                }


                if(!(i + 1<listaEtiquetas.length)){
                    return;
                } else {

                    i++;

                    if (listaEtiquetas[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){

                        let nuevaEtiqueta2 = nuevaFila.insertCell();
                        let etiquetap2 = document.createElement('p');
                        etiquetap2.id = `etiqueta_${listaEtiquetas[i]['_id']}`;
                        etiquetap2.textContent = listaEtiquetas[i]['nombre'];
                        let contenido2 = etiquetap2.textContent;
                        nuevaEtiqueta2.appendChild(etiquetap2);
                        // nuevaEtiqueta2.innerHTML = listaEtiquetas[i]['nombre'];
                        nuevaEtiqueta2.id = listaEtiquetas[i]['_id'];
                        // nuevaEtiqueta2.classList.add('chips');
                        if (user.userType === 'superAdministrador') {
                            nuevaEtiqueta2.insertAdjacentHTML('beforeend', `<div class="opciones" id="opciones_${listaEtiquetas[i]['_id']}"><div class="awesome_images"></i><i class="fas fa-edit modificar" id="modificar_${nuevaEtiqueta2.id}"></i><i class="fas fa-trash-alt eliminar" id="eliminar_${nuevaEtiqueta2.id}"></i></div></div>`);

                            nuevaEtiqueta2.addEventListener('mouseover', mostrar =>{
                                document.getElementById(`opciones_${nuevaEtiqueta2.id}`).style.display = 'inline-block';
                                let botonModificar = document.getElementById(`modificar_${nuevaEtiqueta2.id}`);
                                let botonEliminar = document.getElementById(`eliminar_${nuevaEtiqueta2.id}`);
                                let z = 2;
                                botonModificar.addEventListener('click', activarCampoTexto =>{
                                    if (z % 2 === 0) {
                                        etiquetap2.contentEditable = true;
                                        etiquetap2.style.background = '#f9aa33';
                                        etiquetap2.selected = true;
                                        $(`#${etiquetap2.id}`).keypress(function(e) {
                                            var keycode = (e.keyCode ? e.keyCode : e.which);
                                            console.log(keycode);
                                            if (keycode == '13') {
                                                actualizarEtiqueta(etiquetap2.textContent, nuevaEtiqueta2.id, contenido2);
                                                e.preventDefault();
                                                return false;
                                            }
                                        });
                                    }
                                    z++;
                                });
                                botonEliminar.addEventListener('click', activarCampoTexto =>{
                                    eliminarEtiqueta(nuevaEtiqueta2.id);
                                });
                            });
                            nuevaEtiqueta2.addEventListener('mouseleave', eliminar =>{
                                document.getElementById(`opciones_${nuevaEtiqueta2.id}`).style.display  = 'none';
                                etiquetap2.style.background = 'inherit';
                            });
                        }
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
    document.getElementById('tblCriteriosBusqueda').insertAdjacentHTML('afterend', `<p id="error"> ${mensaje}</p>`);
}
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.chips');
//     var instances = M.Chips.init(elems, options);
// });
// $('.chips').chips();
// $('.chips-initial').chips({
//     data: [{
//         tag: 'Apple',
//     }, {
//         tag: 'Microsoft',
//     }, {
//         tag: 'Google',
//     }],
// });
// $('.chips-placeholder').chips({
//     placeholder: 'Enter a tag',
//     secondaryPlaceholder: '+Tag',
// });
// $('.chips-autocomplete').chips({
//     autocompleteOptions: {
//         data: {
//             'Apple': null,
//             'Microsoft': null,
//             'Google': null
//         },
//         limit: Infinity,
//         minLength: 1
//     }
// });