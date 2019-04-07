'use strict';

// const opcionVer = document.querySelector('#opcionVer');
const opcionVerPF = document.querySelector('#aPreguntasPF');
const opcionVerCE = document.querySelector('#aPreguntasCE');


const inputFiltrar = document.querySelector('#txtFiltrar');

let user = JSON.parse(sessionStorage.getItem('usuario'));//ya está declarado

let idCentroEducativo;

if (user.userType == 'padreFamilia' ) {//REDIRECCIONAMIENTO
    if (location.pathname.split("/").slice(-1) != 'preguntasFrecuentesPF.html') setTimeout(location.href='preguntasFrecuentesPF.html?idCE='+IdGeneralCE, 0);

    if (opcionVerPF)  opcionVerPF.href = 'preguntasFrecuentesPF.html?idCE='+IdGeneralCE;
} else {
    if (location.pathname.split("/").slice(-1) != 'preguntasFrecuentesCE&Admin.html') setTimeout(location.href='preguntasFrecuentesCE&Admin.html?idCE='+IdGeneralCE, 0);

    if (opcionVerCE) opcionVerCE.href = 'preguntasFrecuentesCE&Admin.html?idCE='+IdGeneralCE;
}

if (user.userType == 'padreFamilia' || user.userType == 'superAdministrador' ){
    idCentroEducativo = IdGeneralCE;
}else {
    idCentroEducativo = user._id;
}

let listaPreguntasFrecuentes = getPreguntasFrecuentes(idCentroEducativo);

//
console.log(listaPreguntasFrecuentes.length);

insertarMensaje(`No se encontró ninguna pregunta frecuente relacionada con este centro educativo`);

mostrarPreguntasFrecuentes();

inputFiltrar.addEventListener('keyup', mostrarPreguntasFrecuentes);


function mostrarPreguntasFrecuentes() {

    let tabla = document.querySelector('#tblPreguntasFrecuentes tbody');

    let busqueda = inputFiltrar.value;

    tabla.innerHTML = '';

    if (listaPreguntasFrecuentes.length > 0 && !(typeof listaPreguntasFrecuentes == 'string')){

        if (document.getElementById('error')) eliminarMensaje();

        for (let i = 0; i < listaPreguntasFrecuentes.length; i++) {

            if (listaPreguntasFrecuentes[i]['pregunta'].toLowerCase().includes(busqueda.toLowerCase())){

                if (document.getElementById('error')) eliminarMensaje();

                let pregunta = tabla.insertRow();

                pregunta.id = listaPreguntasFrecuentes[i]['_id'];

                pregunta.classList.add('pregunta');

                pregunta.innerHTML = listaPreguntasFrecuentes[i]['pregunta'];

                let contenidoP = pregunta.textContent;

                pregunta.insertAdjacentHTML('beforeend',`<p class="respuesta" id="respuesta_${pregunta.id}">${listaPreguntasFrecuentes[i]['respuesta']}</p>` );

                let contenidoR = document.getElementById(`respuesta_${pregunta.id}`).textContent;

                if (user.userType === 'superAdministrador' || user.userType === 'centroEducativo'){

                    pregunta.insertAdjacentHTML('beforeend', `<div class="awesome_images" id="opciones_${pregunta.id}"></i><i class="fas fa-edit modificar" id="modificar_${pregunta.id}"></i><i class="fas fa-trash-alt eliminar" id="eliminar_${pregunta.id}"></i></div>`);


                    pregunta.addEventListener('mouseover', mostrar =>{

                        document.getElementById(`opciones_${pregunta.id}`).style.display = 'inline-block';
                        document.getElementById(`opciones_${pregunta.id}`).style.color = 'white';

                        let botonModificar = document.getElementById(`modificar_${pregunta.id}`);
                        let botonEliminar = document.getElementById(`eliminar_${pregunta.id}`);
                        let z = 2;
                        botonModificar.addEventListener('click', activarCampoTexto =>{
                            if (z % 2 === 0) {
                                pregunta.contentEditable = true;
                                pregunta.style.background = '#f9aa33';
                                pregunta.selected = true;
                                $(`#${pregunta.id}`).keypress(function(e) {
                                    var keycode = (e.keyCode ? e.keyCode : e.which);
                                    console.log(keycode);
                                    if (keycode == '13') {
                                        actualizarPregunta(pregunta.textContent, respuesta.textContent, pregunta.id, contenidoP, contenidoR);
                                        e.preventDefault();
                                        return false;
                                    }
                                });
                            }
                            z++;
                        });
                        botonEliminar.addEventListener('click', eliminar =>{
                            eliminarPregunta(nuevaEtiqueta.id);
                        });
                    });

                    pregunta.addEventListener('mouseleave', retornar =>{
                        document.getElementById(`opciones_${pregunta.id}`).style.display  = 'none';

                    });
                }

            } else{
                if (document.getElementById('error')) eliminarMensaje();
                insertarMensaje(`No se encontró la pregunta ${busqueda}`);
            }
        }
    } else {
        if (document.getElementById('error')) eliminarMensaje();
        insertarMensaje(`No se encontró ninguna pregunta frecuente relacionada con este centro educativo`);
    }

}

function eliminarMensaje() {
    document.querySelector('.right').removeChild(document.getElementById('error'));
}

function insertarMensaje(mensaje) {
    document.getElementById('tblPreguntasFrecuentes').insertAdjacentHTML('afterend', `<p id="error" id="mensajito"> ${mensaje}</p>`);
}