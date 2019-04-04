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
                nuevaEtiqueta.id = listaEtiquetas[i]['_id'];
                nuevaEtiqueta.innerHTML = listaEtiquetas[i]['nombre'];
                // nuevaEtiqueta.classList.add('chips');
                if (user.userType === 'superAdministrador') {
                    nuevaEtiqueta.addEventListener('mouseover', mostrar =>{
                        if (!document.querySelector(`#${nuevaEtiqueta.id} .opciones`)) nuevaEtiqueta.insertAdjacentHTML('beforeend', `<div class="opciones" id="${listaEtiquetas[i]['_id']}"><div class="awesome_images"></i><i class="fas fa-edit modificar"></i><i class="fas fa-trash-alt eliminar"></i></div></div>`);
                    });
                    nuevaEtiqueta.addEventListener('mouseleave', eliminar =>{
                        document.getElementById(`${nuevaEtiqueta.id}`).removeChild(document.querySelector('.opciones'));
                    });
                }

                if(!(i + 1 < listaEtiquetas.length)){
                    return;
                } else {

                    i++;

                    if (listaEtiquetas[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
                        let nuevaEtiqueta1 = nuevaFila.insertCell();

                        nuevaEtiqueta1.innerHTML = listaEtiquetas[i]['nombre'];
                        // nuevaEtiqueta1.classList.add('chips');
                        if (user.userType === 'superAdministrador') nuevaEtiqueta1.insertAdjacentHTML('beforeend', `<div class="opciones" id="${listaEtiquetas[i]['_id']}"><div class="awesome_images"></i><i class="fas fa-edit modificar"></i><i class="fas fa-trash-alt eliminar"></i></div></div>`);

                    }

                }


                if(!(i + 1<listaEtiquetas.length)){
                    return;
                } else {

                    i++;

                    if (listaEtiquetas[i]['nombre'].toLowerCase().includes(filtro.toLowerCase())){
                        let nuevaEtiqueta2 = nuevaFila.insertCell();

                        nuevaEtiqueta2.innerHTML = listaEtiquetas[i]['nombre'];
                        // nuevaEtiqueta2.classList.add('chips');
                        if (user.userType === 'superAdministrador') nuevaEtiqueta2.insertAdjacentHTML('beforeend', `<div class="opciones" id="${listaEtiquetas[i]['_id']}"><div class="awesome_images"></i><i class="fas fa-edit modificar"></i><i class="fas fa-trash-alt eliminar"></i></div></div>`);

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