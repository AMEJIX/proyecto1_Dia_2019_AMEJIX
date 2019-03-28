"use strict"

    

    function mostrarDatosSA (){
    let infoMEP = listarInfoMEP();
    console.log(infoMEP);

    let spanNombreSA = document.getElementById('spanNombreSA');
    let spanSegundoNombreSA = document.getElementById('spanSegundoNombreSA');
    let spanApellidoSA = document.getElementById('spanApellidoSA');
    let spanSegundoApellidoSA = document.getElementById('spanSegundoApellidoSA');
    let spanEmailSA = document.getElementById('spanEmailSA');
    let spanTelefonoSA = document.getElementById('spanTelefonoSA');
    let spanPuestoMEPSA = document.getElementById('spanPuestoMEPSA');    
    let imagenSA = document.getElementById('imagenSA');


    spanNombreSA.innerHTML = infoMEP [0] ['nombre'] ;
    spanSegundoNombreSA.innerHTML =infoMEP [0] ['segundoNombre'];
    spanApellidoSA.innerHTML = infoMEP [0] ['apellido'];
    spanSegundoApellidoSA.innerHTML = infoMEP [0] ['segundoApellido'];
    spanEmailSA.innerHTML = infoMEP [0] ['email'];
    spanTelefonoSA.innerHTML = infoMEP [0] ['telefono'];
    spanPuestoMEPSA.innerHTML = infoMEP [0] ['puesto'];    
    imagenSA.src = infoMEP [0] ['imagenPF'];
}
mostrarDatosSA();











