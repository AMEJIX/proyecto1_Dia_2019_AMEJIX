'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));

const tabla = document.querySelector('#tblUsuarios tbody');
const inputFiltro = document.querySelector('#txtFiltro');

if(user.userType == 'centroEducativo' || user.userType == 'padreFamilia' ){
    window.location.href = 'loSentimos.html';
}

let visitas = [];

let usuarios = listarUsuariosCE();
mostrarDatos();

let agregarVisitas = () =>{
    let visitasUsuario;

    for (let ce of usuarios){
        visitasUsuario = obtener_datos(ce._id);

        usuarios = Object.assign(ce,  {visitas: visitasUsuario})
    }
};

agregarVisitas();

inputFiltro.addEventListener('keyup', mostrarDatos);

function mostrarDatos() {


    let filtro = inputFiltro.value;
    tabla.innerHTML = '';

    for (let i = 0; i < usuarios.length; i++) {

        let fechas = false;
        if (usuarios[i]['visitas'].fechas) fechas = usuarios[i]['visitas'].fechas;

        if (usuarios[i]['centroEducativo'].toLowerCase().includes(filtro.toLowerCase()) || fechas) {

            let fila = tabla.insertRow();

            let cantidadVisitas = fechas.length;

            if (fechas){
                for (let fecha of fechas){

                }
            }


            // fila.insertCell().innerHTML = usuarios[i]['centroEducativo'];
            let nombre = fila.insertCell();
            nombre.textContent = usuarios[i]['centroEducativo'];
            let anio = fila.insertCell();
            anio.textContent = '2019';
            let mes = fila.insertCell();
            mes.textContent = 'abril';
            let visitas = fila.insertCell();
            visitas.textContent = cantidadVisitas;


            // let cEElementa = document.createElement('a');
            // cEElementa.innerHTML= usuarios[i] ['centroEducativo'];
            // cEElementa.href =
            //     'profileInfoCE.html?idCE=' + usuarios [i] ['_id'] + '&centroEducativo=' + usuarios [i] ['centroEducativo'];
            // cEElementa.value =  usuarios [i] ['_id'];
            //
            // nombre.appendChild(cEElementa);
        }
    }
}