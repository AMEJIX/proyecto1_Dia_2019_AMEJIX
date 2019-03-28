"use strict";

let user = JSON.parse(sessionStorage.getItem("usuario"));

'use strict';
const aInfoCE= document.querySelector('#aInfoCE');
const aMatricula= document.querySelector('#aMatricula');
const aBecas= document.querySelector('#aBecas');
const aCitas= document.querySelector('#aCitas');
const aMaterialInformativo= document.querySelector('#aMaterialInformativo');
const aNoticias= document.querySelector('#aNoticias');
const aActividades= document.querySelector('#aActividades'); 
const aUtiles= document.querySelector('#aUtiles');
const aPreguntasFrecuentes = document.querySelector('#aPreguntasFrecuentes');
// const = document.querySelector('#aEtiquetas');                          


let agregarParametroUrl = (pParametro) => {
        aInfoCE.href = 'informacionPersonalCEVistaOtroUsuario.html?idCE=' + pParametro;
        // aMatricula = 'mostrarMatriculaCostos.html?idCE=' + pParametro;
        // aBecas = 'mostrarBecas.html?idCE=' + pParametro;

        aMaterialInformativo.href = 'mostrarMaterialInformativo.html?idCE=' + pParametro;
        // aNoticias = 'mostrarNoticias.html?idCE=' + pParametro;
        aActividades.href ='listarActividades.html?idCE=' + pParametro;
        aUtiles.href ='listarUtiles.html?idCE=' + pParametro;
        aPreguntasFrecuentes.href = 'preguntasFrecuentesPF.html?idCE=' + pParametro;
};

let agregarVariosParametroUrl = (pParametro, ...args) => {
    let masParametros = '';
    let i =0;
    for(let arg of args){
        if (i === 0) masParametros += '&centroEducativo=' + arg;
        i++;
    }
    aCitas.href = 'citas.html?idCE=' + pParametro + masParametros;
};

agregarParametroUrl(IdGeneralCE);
agregarVariosParametroUrl(IdGeneralCE, NombreGeneralCE);

function ocultar() {
    console.log(user.userType);
    if (user.userType == "padreFamilia") {     
        // document.querySelector('#aVerCita').style.display = 'none';

    }else if(user.userType == "superAdministrador"){
        document.querySelector('#menuCitasEnCE').style.display = 'none';
    }
}

ocultar();

