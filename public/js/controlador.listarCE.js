'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));

const tabla = document.querySelector('#tblUsuarios tbody');
const inputFiltro = document.querySelector('#txtFiltro');
const sltEtiquetas = document.querySelector('#sltEtiquetas');
const tablaEtiquetas = document.querySelector('#tblEtiquetasSeleccionadas tbody');
let contador = 0;
let etiquetasSeleeccionadas = [];
let fila = tablaEtiquetas.insertRow();

if(user.userType == 'centroEducativo'){
    window.location.href = 'loSentimos.html';
}
let usuarios = listarUsuariosCE();
mostrarDatos();

inputFiltro.addEventListener('keyup', mostrarDatos);

let etiquetas = getCriteriosBusqueda();

let cargarEtiquetas = () =>{

    if (typeof etiquetas != 'string') {
        for (let i = 0; i < etiquetas.length; i++){
            // tablaEtiquetas.insertAdjacentHTML('beforeend', `<option value="${i}">${etiquetas[i]['nombre']}</option>`)
            let option = document.createElement("option");
            option.text = `${etiquetas[i]['nombre']}`;
            option.value = `${etiquetas[i]['nombre']}`;
            sltEtiquetas.add(option);
        }
    }

};

cargarEtiquetas();


let agregarEtiquetas = () =>{

    if (contador%3 == 0) fila = tablaEtiquetas.insertRow();

    contador++;

    let opcionSeleccionada = sltEtiquetas.options[sltEtiquetas.selectedIndex];

    if (!(etiquetasSeleeccionadas.includes(opcionSeleccionada.value))){
        let etiqueta = fila.insertCell();
        etiqueta.id = opcionSeleccionada.textContent + '_seleccionada';
        console.log( document.querySelector(`#${etiqueta.id}`));
        // document.querySelector(`#${etiqueta.id}`).insertAdjacentHTML('beforeend', `<div class="awesome_images"><i class="fas fa-trash-alt" id="eliminar_${etiqueta.id}"></i></div>`);
        let awesome = document.createElement('div');
        let basurero = document.createElement('i');
        awesome.classList.add('awesome_images');
        basurero.classList.add('fas');
        basurero.classList.add('fa-trash-alt');
        document.querySelector(`#${etiqueta.id}`).appendChild(awesome);
        awesome.appendChild(basurero);

        etiqueta.textContent = opcionSeleccionada.textContent;
        etiquetasSeleeccionadas.push(etiqueta.textContent);
    } else {
        contador--;
        swal.fire(
            {
                timer: 1500,
                title: 'Opción no válida',
                type: 'warning'
            }
        );
    }
    
};

sltEtiquetas.addEventListener('change', agregarEtiquetas);
function mostrarDatos() {

    
    let filtro = inputFiltro.value;
    tabla.innerHTML = '';

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i]['centroEducativo'].toLowerCase().includes(filtro.toLowerCase())) {
            let fila = tabla.insertRow();

            // fila.insertCell().innerHTML = usuarios[i]['centroEducativo'];
            let nombre = fila.insertCell();
            fila.insertCell().innerHTML = usuarios[i]['telCE'];
            fila.insertCell().innerHTML = usuarios[i]['tipo'];
            fila.insertCell().innerHTML = usuarios[i]['provincia'];


            let cEElementa = document.createElement('a');
            cEElementa.innerHTML= usuarios[i] ['centroEducativo'];
            cEElementa.href =
                'profileInfoCE.html?idCE=' + usuarios [i] ['_id'] + '&centroEducativo=' + usuarios [i] ['centroEducativo'];
            cEElementa.value =  usuarios [i] ['_id'];
            
            nombre.appendChild(cEElementa);
        }
    }
}


// de EVELYN
// 'use strict'

// const tablaPrueba = document.querySelector('#tblPrueba tbody');

// let mostrarPrueba = () =>{
//     let pruebaUtiles = listarCEducativos();
    
//     for(let i=0; i<pruebaUtiles.length; i++){

//         let fila = tablaPrueba.insertRow();

//         let nombre = fila.insertCell();
//         // let idPrueba = fila.insertCell();

//         let cEElementa = document.createElement('a');
//         cEElementa.innerHTML= usuarios[i] ['centroEducativo'];
//         cEElementa.href = 'perfilCentroPrueba.html?idCE=' + usuarios [i] ['_id'];        
//         cEElementa.value =  usuarios [i] ['_id'];
//         nombre.appendChild(cEElementa);
        


//         // let prueba = document.createElement('input');
//         // prueba.value = pruebaUtiles [i] ['_id'];
//         // idPrueba.appendChild(prueba);        
//         // prueba.classList.add('prueba');
//         // prueba.id = 'inputIDprueba';
        

         
//     }
// };

// mostrarPrueba();