'use strict';

let user = JSON.parse(sessionStorage.getItem("usuario"));
const conectado = sessionStorage.getItem('conectado');
const tipo_usuario = user.userType;

const tablaCE = document.querySelector('#tablaListaCE tbody');
const tablaCriterios = document.querySelector('#tblCriteriosMEP');
const tablaRangos = document.querySelector('#tblRangoCriteriosMEP');
const inputTotal = document.querySelector('#inpTotal');
const inputEstrellas = document.querySelector('#inpEstrellas');
const botonRegistrar = document.querySelector('#btnRegistrar');
const primerContenido = document.querySelector('#primerContenido');
const filtroDerecha = document.querySelector('#filtroDerecha');
const segundoContenido = document.querySelector('#segundoContenido');
const nombreDelCE = document.querySelector('#nombreCE');
const divIDInvisible = document.querySelector('#divInputCE');




const inputFiltro = document.querySelector('#txtFiltro');


if(user.userType == 'centroEducativo' || user.userType == 'padreFamilia'){
    window.location.href = 'loSentimos.html';
}

    mostrarCE();
    
function mostrarCE() {
        segundoContenido.style.display = 'none';
        let centrosEducativos = listarCE();

        let filtro = inputFiltro.value;
        tablaCE.innerHTML = '';
        
        for (let i = 0; i < centrosEducativos.length; i++) {
            if (centrosEducativos[i]['centroEducativo'].toLowerCase().includes(filtro.toLowerCase())) {
                let fila = tablaCE.insertRow();
               fila.insertCell().innerHTML = centrosEducativos[i]['centroEducativo'];      
                let celdaValorar = fila.insertCell();
                let botonValorar = document.createElement('button');               
                botonValorar.type = 'button';
                botonValorar.textContent = 'Valorar';
                botonValorar.addEventListener('click', mostrarPanelValorar =>{
                    mostrarTablasValoracion(centrosEducativos[i]['centroEducativo'], centrosEducativos[i]['_id'], centrosEducativos[i]['tipo'], centrosEducativos[i]['imagen']);
                   
                });
                celdaValorar.appendChild(botonValorar);
                
        };
        }
    }


    //VALIDAR CAMPOS PARA REGISTRAR EVALUACIÓN


   let  mostrarTablasValoracion=(pnombreCentroEducativo, pidCE, ptipo, pimagen)=>{
    
        primerContenido.style.display = 'none';
       
        segundoContenido.style.display = 'block';
        let nombreCE = pnombreCentroEducativo;

        document.querySelector('#nombreCE').textContent = nombreCE;
        let annoJS = new Date().getFullYear();
        document.querySelector('#anno').textContent = annoJS;

        let criterios = listarCriterios(); 
        let rangos = listarRangos(); 
     
           
        for(let i=0; i<criterios.length; i++){
            let fila = tablaCriterios.insertRow();
            fila.insertCell().innerHTML = criterios [i] ['criterio'];
            fila.insertCell().innerHTML = criterios [i] ['descripcion'];
            fila.insertCell().innerHTML = criterios [i] ['puntaje'];
            let celdaCheckBox = fila.insertCell();
    
            let checkBox = document.createElement('input');
            checkBox.type = 'checkbox'; 
            checkBox.classList.add('claseCheck'); 
                           
            checkBox.addEventListener('change', actualizarTotal=>{
                if(checkBox.checked){
                    mostrarTotal(criterios [i] ['puntaje'], rangos);  
                }else{
                    mostrarTotal(criterios [i] ['puntaje']*-1, rangos);
                }
                             
            });
            celdaCheckBox.appendChild(checkBox);    
        }
        
        for(let i=0; i<rangos.length; i++){
            let fila = tablaRangos.insertRow();
            fila.insertCell().innerHTML = rangos [i] ['rango'];
            fila.insertCell().innerHTML = rangos [i] ['valorMinimo'];
            fila.insertCell().innerHTML = rangos [i] ['valorMaximo'];
            fila.insertCell().innerHTML = rangos [i] ['estrellas']; 
        }

        nombreDelCE.value = nombreCE;
        let inputIdInvisible = document.createElement('input');
        inputIdInvisible.value = pidCE;
        inputIdInvisible.id = 'inputIdInvisible';
        inputIdInvisible.classList.add('inputInvisible');
        inputIdInvisible.disabled = 'disabled';
        divIDInvisible.appendChild(inputIdInvisible);
        let inputTipoInvisible = document.createElement('input');
        inputTipoInvisible.value = ptipo;
        inputTipoInvisible.id = 'inputTipoInvisible';
        inputTipoInvisible.classList.add('inputInvisible');
        inputTipoInvisible.disabled = 'disabled';
        divIDInvisible.appendChild(inputTipoInvisible);
        let inputImagenInvisible = document.createElement('input');
        inputImagenInvisible.value = pimagen;
        inputImagenInvisible.id = 'inputImagenInvisible';
        inputImagenInvisible.classList.add('inputInvisible');
        inputImagenInvisible.disabled = 'disabled';
        divIDInvisible.appendChild(inputImagenInvisible);
       
    }



    let aux = 0;
    let mostrarTotal = (ppuntajeCriterio, prangos) =>{
        aux = aux + ppuntajeCriterio;
        inputTotal.value = aux;
        
        mostrarEstrellas(inputTotal.value, prangos);
    }

    let mostrarEstrellas = (pTotal, prangos) =>{        
       
        let totalEvaluacion = pTotal;
console.log(totalEvaluacion);
        for(let i = 0; i<prangos.length; i++){
            
            let valorMinimo = prangos [i] ['valorMinimo'];
            let valorMaximo = prangos [i] ['valorMaximo'];
            if(totalEvaluacion >= valorMinimo && totalEvaluacion <= valorMaximo){
                inputEstrellas.value = prangos [i] ['estrellas'];
                
                console.log(prangos [i] ['estrellas']);
            }
        }
    }
    let pannoJS = new Date().getFullYear();
  
    
   
    let validar = () => {
        let error = false;   
        
        if(inputTotal.value == ''){
            error = true;
            inputTotal.classList.add('errorSelect');
        }
        else{
            inputTotal.classList.remove('errorSelect');
        }

        if(inputEstrellas.value == ''){
            error = true;
            inputEstrellas.classList.add('errorSelect');
        }
        else{
            inputEstrellas.classList.remove('errorSelect');
        }
        

        return error;
    }

    let validarAnno = () =>{    
      let pid = document.querySelector('#inputIdInvisible').value;
      console.log(pannoJS, pid);
    let centroEDatosEvaluacion = listarCEEvaluados(pannoJS, pid);   
        console.log(centroEDatosEvaluacion);
        let error = false;
        if(centroEDatosEvaluacion !== 'No se encontraron centros educativos registrados'){
            error = true;
        }else{
            error = false;
        }
        return error;
        
    }

    let obtenerDatosEvaluacion = () =>{
        if(validarAnno() == false){
            if(validar() == false){
                let nombre =  nombreDelCE.value;
                let total = inputTotal.value;
                let estrellas = inputEstrellas.value;
                let anno = new Date().getFullYear();
                let idCE = document.querySelector('#inputIdInvisible').value;
                let tipo = document.querySelector('#inputTipoInvisible').value;
                let posicion = '';
                
                let imagen = document.querySelector('#inputImagenInvisible').value;
                if(imagen == ''){
                    imagen = 'sinImagen';
                }

                console.log(imagen);
    
                
    
                nombreDelCE.value = '';
                inputTotal.value = '';
                inputEstrellas.value = '';
                document.getElementsByClassName('claseCheck').checked = false;
                
    
                registrarEvaluacionMEP(nombre, total, estrellas, anno, idCE, tipo, imagen, posicion);
            }else{
                swal.fire({
                    type: 'warning',
                    title: 'La evaluación no se registró correctamente',
                    text: 'Por favor revise los campos resaltados'
                });
            }
        }else{
            
            nombreDelCE.value = '';
            inputTotal.value = '';
            inputEstrellas.value = '';
            document.getElementsByClassName('claseCheck').checked = false;

            swal.fire({
                type: 'warning',
                title: 'La evaluación no se registró correctamente',
                text: 'El centro educativo ya fué valorado para el presente año',
                onClose: () => {
                    window.location.href = 'evaluarCentroEducativoPorMEP.html';
                  }  
            });
        }
     }    

    inputFiltro.addEventListener('keyup', mostrarCE);
    botonRegistrar.addEventListener('click', obtenerDatosEvaluacion);
      



