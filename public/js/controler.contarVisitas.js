'use strict';

let idCE;

if (user.userType === 'centroEducativo') {
    idCE = user._id;
} else {
    idCE = IdGeneralCE;
}

let visita = obtenerVisita(idCE);

let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
let fechaActual = new Date();
// fechaActual = new Date(fechaActual.getFullYear() + '-' + fechaActual.getMonth() + '-' + fechaActual.getDate());

fechaActual = fechaActual.getDate() + " de " + meses[fechaActual.getMonth()] + " de " + fechaActual.getFullYear();

let contadorVisitas = () => {

    
    // if (obtenerVisita == false) {
    //     let fechas = [];
    //     fechas.push(fechaActual);
    //     registrarVisita(fechaActual, idCE);
    //     modificarFechaVisita(visita._id, fechas, idCE);
    // } else {
    //     let fechas = [];
    //     fechas.push(fechaActual);
    //     modificarFechaVisita(visita._id, visita.fechas, idCE);
    //     console.log(fechaActual);
    // }
};

window.onload = () => {
    contadorVisitas();
};



