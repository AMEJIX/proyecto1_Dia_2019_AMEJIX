
let user = JSON.parse(sessionStorage.getItem("usuario"));


function ocultar() {
    console.log(user.userType);
    if (user.userType == "padreFamilia") {
        document.querySelector('#padreFamilia').style.display = 'block';
        document.querySelector('#centroEducativo').style.display = 'none';


    } else if (user.userType == "centroEducativo") {
        document.querySelector('#centroEducativo').style.display = 'block';
        document.querySelector('#padreFamilia').style.display = 'none';

    }

}

ocultar();


if (user) {

    //PF
    let spanNombre = document.getElementById('spanNombre');
    let spanSegundoNombre = document.getElementById('spanSegundoNombre');
    let spanApellido = document.getElementById('spanApellido');
    let spanNumID = document.getElementById('spanSegundoApellido');
    let spanSegundoApellido = document.getElementById('spanNumID');
    let spanNacionalidad = document.getElementById('spanNacionalidad');
    let spanEmail = document.getElementById('spanEmail');
    let spanTelefono = document.getElementById('spanTelefono');
    let spanProvincia = document.getElementById('spanProvincia');
    let spanCanton = document.getElementById('spanCanton');
    let spanDistrito = document.getElementById('spanDistrito');
    let spanHijos = document.getElementById('spanHijos');

    //CE
    let spanInstitución = document.getElementById('spanInstitución');
    let spanCedulaJuridica = document.getElementById('spanCedulaJuridica');
    let spanComercial = document.getElementById('spanComercial');
    let spanAnno = document.getElementById('spanAnno');
    let spanTipoInst = document.getElementById('spanTipoInst');
    let spanClasificacion = document.getElementById('spanClasificacion');
    let spanGrados = document.getElementById('spanGrados');
    let spanPrivacidad = document.getElementById('spanPrivacidad');
    let spanGenero = document.getElementById('spanGenero');
    let spanReligion = document.getElementById('spanReligion');
    let spanTelefonoCE = document.getElementById('spanTelefonoCE');
    //ambos usuarios comparten la misma variable de email
    // let spanEmailCE = document.getElementById('spanEmailCE');
    let spanSitioWeb = document.getElementById('spanSitioWeb');
    
    
    let spanFacebook = document.getElementById('spanFacebook')
    let spanTwitter = document.getElementById('spanTwitter')
    let spanInstagram = document.getElementById('spanInstagram')


    let spanFax = document.getElementById('spanFax');
    let spanHistoria = document.getElementById('spanHistoria');
    let spanProvinciaCE = document.getElementById('spanProvinciaCE');
    let spanNombreCEP = document.getElementById('spanNombreCEP');
    let spanDepartamento = document.getElementById('spanDepartamento');
    let spanTelefonoCEP = document.getElementById('spanTelefonoCEP');
    let spanExtension = document.getElementById('spanExtension');
    let spanNumIDCEP = document.getElementById('spanNumIDCEP');
    let spanEmailCEP = document.getElementById('spanEmailCEP');
    let imagenCE = document.getElementById('imagenCE');
    let spanEmailCE = document.getElementById('spanEmailCE');

    

    //PF

    spanNombre.innerHTML = user.nombre;
    spanSegundoNombre.innerHTML = user.segundoNombre;
    spanApellido.innerHTML = user.apellido;
    spanNumID.innerHTML = user.segundoApellido;
    spanSegundoApellido.innerHTML = user.identificacion;
    spanNacionalidad.innerHTML = user.nacionalidad;
    spanEmail.innerHTML = user.email;
    spanTelefono.innerHTML = user.telefono;
    spanProvincia.innerHTML = user.provincia;
    spanCanton.innerHTML = user.canton;
    spanDistrito.innerHTML = user.distrito;




    //CE
    spanInstitución.innerHTML = user.centroEducativo;
    spanCedulaJuridica.innerHTML = user.cedulaJuridica;
    spanComercial.innerHTML = user.nombreComercial;
    spanAnno.innerHTML = user.anno;
    spanTipoInst.innerHTML = user.tipo;
    spanClasificacion.innerHTML = user.clasificacion;
    spanGrados.innerHTML = user.grados;
    spanPrivacidad.innerHTML = user.privacidad;

    spanGenero.innerHTML = user.genero;
    spanReligion.innerHTML = user.religion;
    spanTelefonoCE.innerHTML = user.telCE;
    spanSitioWeb.innerHTML = user.web;

    spanRedSocial.innerHTML = user.spanRedSocial;
    spanFacebook.innerHTML = user.spanFacebook;
    spanTwitter.innerHTML = user.twitter;
    spanInstagram.innerHTML = user.instagram;

    spanFax.innerHTML = user.fax;
    spanHistoria.innerHTML = user.histroia;
    spanProvinciaCE.innerHTML = user.provincia;
    spanCantonCE.innerHTML = user.canton;
    spanDistritoCE.innerHTML = user.distrito;
    spanNombreCEP.innerHTML = user.nombreCEP;
    spanDepartamento.innerHTML = user.departamento;
    spanTelefonoCEP.innerHTML = user.telCEP;
    spanExtension.innerHTML = user.extension;
    spanNumIDCEP.innerHTML = user.numIDCEP;
    spanEmailCEP.innerHTML = user.emailCEP;
    imagenCE.src = user.imagen;
    spanEmailCE.innerHTML = user.email;


    // spanHijos.innerHTML = user.edades;
   
    arregloEdades = user.edades.split(", ")
    spanHijos.innerHTML = arregloEdades.length -1;

    divEdadHijos = document.querySelector('#divEdadHijos');
    divEdadHijos.innerHTML = '';
    
    for (let i =0; i < arregloEdades.length -1; i++){
        var newDiv = document.createElement('div');
        newDiv.style.display = 'block';


        var newLabel = document.createElement("label");
        newLabel.innerHTML = "Edad hijo " + Number(i+1);
      

        var newSpan = document.createElement("span");
        newSpan.innerHTML = ": " + arregloEdades[i];
      
    
        newDiv.appendChild(newLabel);
        newDiv.appendChild(newSpan);

        divEdadHijos.appendChild(newDiv);
    }


}