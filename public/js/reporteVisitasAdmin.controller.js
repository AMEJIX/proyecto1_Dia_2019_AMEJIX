'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));

const tabla = document.querySelector('#tblUsuarios tbody');
const inputFiltro = document.querySelector('#txtFiltro');

if(user.userType == 'centroEducativo' || user.userType == 'padreFamilia' ){
    window.location.href = 'loSentimos.html';
}

let visitas = [];

let usuarios = listarUsuariosCE();

let esIndefinido = (variable) =>{
    return  variable === undefined || variable === null;
};

mostrarDatos();

let agregarVisitas = () =>{
    let visitasUsuario;

    for (let i = 0; i < usuarios.length; i++){
        visitasUsuario = obtenerVisita(usuarios[i]._id);
        if (visitasUsuario === false) visitasUsuario = 0;
        if (visitasUsuario !== 0) console.log(visitasUsuario);
        usuarios[i] = Object.assign(usuarios[i],  {visitas: visitasUsuario});
    }
    console.log(usuarios);

};

agregarVisitas();

inputFiltro.addEventListener('keyup', mostrarDatos);

function mostrarDatos() {


    let filtro = inputFiltro.value;
    tabla.innerHTML = '';

    for (let i = 0; i < usuarios.length; i++) {


        if (usuarios[i]['centroEducativo'].toLowerCase().includes(filtro.toLowerCase())
        ) {

            let fila = tabla.insertRow();



            let nombre = fila.insertCell();
            // nombre.textContent = usuarios[i]['centroEducativo'];
            let anio = fila.insertCell();
            anio.textContent = '2019';
            let mes = fila.insertCell();
            mes.textContent = 'abril';
            let visitas = fila.insertCell();
            // visitas.textContent = cantidadVisitas;


            let cEElementa = document.createElement('a');
            cEElementa.innerHTML= usuarios[i] ['centroEducativo'];
            cEElementa.href =
                'profileInfoCE.html?idCE=' + usuarios [i] ['_id'] + '&centroEducativo=' + usuarios [i] ['centroEducativo'];
            cEElementa.value =  usuarios [i] ['_id'];

            nombre.appendChild(cEElementa);
        }
    }
}