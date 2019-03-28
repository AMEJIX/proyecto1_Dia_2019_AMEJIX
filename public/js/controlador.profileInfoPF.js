
"use strict"

let user = JSON.parse(sessionStorage.getItem("usuario"));


'use strict';
const aInfoPF= document.querySelector('#aVerinfoPadre de familia');
// const aCitas= document.querySelector('#aCitas');

let agregarParametroUrl = (pParametro) => {
    aInfoPF.href = 'infoPersonalPFVistaPorSA.html?idCE=' + pParametro;
        
        // aCitas = 'citas.html?idCE=' + pParametro;
        
};
agregarParametroUrl(IdGeneralCE);

function ocultar() {
    console.log(user.userType);
    if(user.userType == "superAdministrador"){
        document.querySelector('#padreFamilia').style.display = 'block';        
    }
}
ocultar();
