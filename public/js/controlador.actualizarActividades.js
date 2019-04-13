'use strict';
// let user = JSON.parse(sessionStorage.getItem("usuario"));


const inputActividad = document.querySelector('#txtActividad');
const inputDescripcion = document.querySelector('#txtDescripcion');
const inputFecha = document.querySelector('#inputFecha');
const imagenActividad = document.querySelector('#imgActividades');

const botonActualizar = document.querySelector('#btnRegistrar');
const idCE = user._id;

var diaActual = new Date();
var dd = diaActual.getDate();
var mm = diaActual.getMonth()+1; //January is 0!
var yyyy = diaActual.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    diaActual = yyyy+'-'+mm+'-'+dd;
    inputFecha.setAttribute("max", diaActual);


if(user.userType == 'padreFamilia'){
    window.location.href = 'loSentimos.html';
}

let get_param = (param) => {
    let url_string =  window.location.href;
    let url = new URL(url_string);
    let id = url.searchParams.get(param);//Toma el parámetro id_inmueble del url y retorna el valor
    return id;
};


let _id = get_param('idActividad');

let actividad = buscarActividad(_id); //se levantan los datos de ese inmueble bajo demanda usando su id

let mostrarDatoArticulo = () =>{
   inputActividad.value = actividad[0]['actividad'];
    inputDescripcion.value = actividad[0]['descripcion']; 
    inputFecha.value = actividad[0]['fecha'];     
    let arregloFecha = [];
    arregloFecha = actividad[0]['fecha'].split("/");    
    let diaActividad = arregloFecha[2]+'-'+arregloFecha[1]+'-'+arregloFecha[0];
    inputFecha.value = diaActividad;

    if (actividad[0]['imagen']) {
        let stringImg = actividad[0]['imagen'];
        let arregloImg = stringImg.split(",");
        let sectionImgActividades = document.querySelector('.sctImagenes');
        for(let v = 0; v<arregloImg.length; v++){
            let nuevoImg = document.createElement('img');
            nuevoImg.style.display = 'inline-block';
            nuevoImg.classList.add('imageActividadAgregada');
            nuevoImg.src = arregloImg[v];
           
            sectionImgActividades.appendChild(nuevoImg);          
        }        
    }else {
            imagen.src = 'img/upload.png';
            imagenActividad.appendChild(imagen);
        }

    
};

if(actividad){
    mostrarDatoArticulo();
}



let stringImgActividades = "";    
let j = 0;
function obtenerImagenVarias(){
let sectionImgActividades = document.querySelector('.sctImagenes');
    if(imagenActividad.src === 'http://localhost:3000/public/img/upload.png'){        
        swal.fire({
            type: 'warning',
            title: 'No ha subido una imagen',
            text: 'Por favor suba una imagen'
        });
    }else{
        stringImgActividades = stringImgActividades == "" ? imagenActividad.src : stringImgActividades + "," + imagenActividad.src;        
        let nuevoImg = document.createElement('img');
        nuevoImg.style.display = 'inline-block';
        nuevoImg.classList.add('imageActividadAgregada');
        nuevoImg.src = imagenActividad.src;
        sectionImgActividades.appendChild(nuevoImg);
        imagenActividad.src = 'img/upload.png';
        j = j + 1; 
    }     
}
// botonAgregar.addEventListener('click', obtenerImagenVarias);







let validar = () =>{
    let error = false;
    if(inputActividad.value == ''){
        error = true;
        inputActividad.classList.add('errorInput');
    }else{
        inputActividad.classList.remove('errorInput');
    }

    if(inputDescripcion.value == ''){
        error = true;
        inputDescripcion.classList.add('errorInput');
    }else{
        inputDescripcion.classList.remove('errorInput');
    }

    if(inputFecha.value == ''){
        inputFecha.classList.add('errorInput');        
    }else{
        inputFecha.classList.remove('errorInput');
    }
    return error;
};

let obtenerDatosActividad = () =>{
    if(validar() == false){
   
        let actividad = inputActividad.value;
        let descripcion = inputDescripcion.value;
        let fecha = inputFecha.value;

        let fechaOrdenada = fecha.split("-");
        let dia = fechaOrdenada[2];
        let mes = fechaOrdenada[1];
        let ano = fechaOrdenada[0];
        
        let fechaCorrecta = dia+"/"+mes+"/"+ano;

        let idCentroEducativo = idCE;

        inputActividad.value = '';
        inputDescripcion.value = '';
        inputFecha.value = '';
        

        Swal.fire({
            title: '¿Está seguro que desea actualizar la actividad?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
          }).then((result) => {
            if (result.value) {
               
        actualizarActividad(actividad, descripcion, fechaCorrecta, stringImgActividades, idCentroEducativo, _id);
            }
          })
    }else{
        swal.fire({
            type: 'warning',
            title: 'La actividad no se actualizó',
            text: 'Por favor revise los campos resaltados'
        });
    }
   
    
        
    
};

botonActualizar.addEventListener('click', obtenerDatosActividad);