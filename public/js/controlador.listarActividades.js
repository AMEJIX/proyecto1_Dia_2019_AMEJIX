'use strict';

let user = JSON.parse(sessionStorage.getItem("usuario"));

const inputFiltro = document.querySelector('#txtFiltro');

const sectionActividades = document.querySelector('#sectionActividades');

if (user.userType == 'centroEducativao') {
    window.location.href = 'loSentimos.html';
}

let mostrarActividades = () => {   
    let actividades = listarActividades(IdGeneralCE);
    sectionActividades.innerHTML = '';
    let filtro = inputFiltro.value;

    if (actividades !== "No se encontraron actividades registradas") {
        for (let i = 0; i < actividades.length; i++) {
            if (actividades[i]['actividad'].toLowerCase().includes(filtro.toLowerCase())) {

                let posicionActual = 0;

                let cardActividad = document.createElement('div');
                cardActividad.classList.add('cardActividadClass');

                let columnaIzquierda = document.createElement('div');
                columnaIzquierda.classList.add('columnaIzquierda');

                let columnaDerecha = document.createElement('div');
                columnaDerecha.classList.add('columnaDerecha');

                let divBajoCDerecha = document.createElement('div');
                divBajoCDerecha.classList.add('divBajoCD');

                let titleActividad = document.createElement('h2');
                titleActividad.classList.add('h2');
                titleActividad.textContent = actividades[i]['actividad'];

                let parrafoDescripcion = document.createElement('p');
                parrafoDescripcion.classList.add('parrafo');
                parrafoDescripcion.textContent = actividades[i]['descripcion'];

                let titleFecha = document.createElement('h3');
                titleFecha.classList.add('h3');
                titleFecha.textContent = actividades[i]['fecha'];

                let divCarousel = document.createElement('div');

                divCarousel.classList.add('carousel');

                let divImagen = document.createElement('div');
                divImagen.id = 'imagenCarousel';

                let botonRetroceder = document.createElement('button');
                botonRetroceder.type = 'button';
                botonRetroceder.classList.add('boton');
                botonRetroceder.id = 'retroceder';
                botonRetroceder.textContent = 'Atrás';
                

                let botonAvanzar = document.createElement('button');
                botonAvanzar.type = 'button';
                botonAvanzar.classList.add('boton');
                botonAvanzar.id = 'retroceder';
                botonAvanzar.textContent = 'Adelante';
                        

                if (actividades[i]['imagen']) {
                    let stringImg = actividades[i]['imagen'];
                    let arregloImg = stringImg.split(",");
                 
                    function pasarFoto() {
                        if(posicionActual >= arregloImg.length - 1) {
                            posicionActual = 0;
                        } else {
                            posicionActual++;
                        }
                        renderizarImagen();
                    }
                  
                    function retrocederFoto() {
                        if(posicionActual <= 0) {
                            posicionActual = arregloImg.length - 1;
                        } else {
                            posicionActual--;
                        }
                        renderizarImagen();
                    }                    
        
                    botonRetroceder.addEventListener('click', retrocederFoto);
                    botonAvanzar.addEventListener('click', pasarFoto);
                    
                    function renderizarImagen () {
                        
                        divImagen.style.backgroundImage = `url(${arregloImg[posicionActual]})`;
                        divImagen.style.backgroundRepeat = 'no-repeat';
                        divImagen.style.backgroundPosition = 'center';
                    }     
                    renderizarImagen();    
                } else {
                    imagen.src = 'img/upload.png';
                    imagenActividad.appendChild(imagen);
                }

                sectionActividades.appendChild(cardActividad);
                columnaIzquierda.appendChild(titleActividad);
                columnaIzquierda.appendChild(parrafoDescripcion);
                columnaIzquierda.appendChild(titleFecha);
                divBajoCDerecha.appendChild(botonRetroceder);
                divBajoCDerecha.appendChild(botonAvanzar);
                divCarousel.appendChild(divImagen);
                columnaDerecha.appendChild(divCarousel);
                columnaDerecha.appendChild(divBajoCDerecha);

                cardActividad.appendChild(columnaIzquierda);
                cardActividad.appendChild(columnaDerecha); 
            }
        }
    } else {
        sectionActividades.innerHTML = "No se encontraron actividades registradas";
    } 
   
}

mostrarActividades();

inputFiltro.addEventListener('keyup', mostrarActividades);