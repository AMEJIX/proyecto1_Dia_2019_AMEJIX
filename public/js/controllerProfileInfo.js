"use strict"

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


switch (user.userType) {
    case "padreFamilia":
        padreFamilia();
        break;
    case "centroEducativo":
        centroEducativo();
        break;
    default:

}

function padreFamilia(){
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
    let imagenPF = document.getElementById('imagenPF');


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
    imagenPF.src = user.imagenPF;



    
        let arregloEdades = user.edades.split(", ");
        spanHijos.innerHTML = arregloEdades.length - 1;

        let divEdadHijos = document.querySelector('#divEdadHijos');
        divEdadHijos.innerHTML = '';

        for (let i = 0; i < arregloEdades.length - 1; i++) {
            var newDiv = document.createElement('div');
            newDiv.style.display = 'block';


            var newLabel = document.createElement("label");
            newLabel.innerHTML = "Edad hijo " + Number(i + 1);


            var newSpan = document.createElement("span");
            newSpan.innerHTML = " " + arregloEdades[i];


            newDiv.appendChild(newLabel);
            newDiv.appendChild(newSpan);

            divEdadHijos.appendChild(newDiv);
        }


    
    //  imagenPF.src = user.imagen;
}

function centroEducativo(){


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
    let textArea = document.getElementById('textAreaDireccionExacta')

    let spanProvinciaCE = document.getElementById('spanProvinciaCE');
    let spanNombreCEP = document.getElementById('spanNombreCEP');
    let spanSegundoNombreCEP = document.getElementById('spanSegundoNombreCEP');
    let spanApellidoCEP = document.getElementById('spanApellidoCEP');
    let spanSegundoApellidoCEP = document.getElementById('spanSegundoApellidoCEP')
    let spanDepartamento = document.getElementById('spanDepartamento');
    let spanTelefonoCEP = document.getElementById('spanTelefonoCEP');
    let spanExtension = document.getElementById('spanExtension');
    let spanNumIDCEP = document.getElementById('spanNumIDCEP');
    let spanEmailCEP = document.getElementById('spanEmailCEP');
    let imagenCE = document.getElementById('imagenCE');
    let imagenCEP = document.getElementById('imagenCEP');
    let spanEmailCE = document.getElementById('spanEmailCE');
    let spanServicios = document.getElementById('spanServicios');

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
    spanFacebook.innerHTML = user.facebook;
    spanTwitter.innerHTML = user.twitter;
    spanInstagram.innerHTML = user.instagram;

    spanFax.innerHTML = user.fax;
    spanHistoria.innerHTML = user.histroia;
    textArea.innerHTML = user.direccionExacta;
    spanProvinciaCE.innerHTML = user.provincia;
    spanCantonCE.innerHTML = user.canton;
    spanDistritoCE.innerHTML = user.distrito;
    spanNombreCEP.innerHTML = user.nombreCEP;
    spanSegundoNombreCEP.innerHTML = user.segundoNombreCEP;
    spanApellidoCEP.innerHTML = user.apellidoCEP;
    spanSegundoApellidoCEP.innerHTML = user.segundoApellidoCEP;
    spanDepartamento.innerHTML = user.departamento;
    spanTelefonoCEP.innerHTML = user.telCEP;
    spanExtension.innerHTML = user.extension;
    spanNumIDCEP.innerHTML = user.numIDCEP;
    spanEmailCEP.innerHTML = user.emailCEP;
    imagenCE.src = user.imagen;
    imagenCEP.src = user.imagenCEP;
    spanEmailCE.innerHTML = user.email;

    //let spanActividades = doucment.getElementById('spanActividades')
       
    let arregloServicios = user.servicios.split(", ");
    let arregloDescripcionesServicios = user.descipcionesServicio.split(", ");

    let divServicios = document.querySelector('#divServicios');
    divServicios.innerHTML = '';

    for (let i = 0; i < arregloServicios.length - 1; i++) {
   
        var newDiv = document.createElement('div');
        newDiv.style.display = 'block';

        var newLabel = document.createElement("label");
        newLabel.innerHTML = "Servicio " + Number(i + 1);


        var newSpan = document.createElement("span");
        newSpan.innerHTML = " " + arregloServicios[i];

        
        var newDivDescripciones = document.createElement('div');
        newDivDescripciones.style.display = 'block';

        var newLabelDescripciones = document.createElement("label");
        newLabelDescripciones.innerHTML = "Descripcion ";

        var newSpanDescripciones = document.createElement("span");
        newSpanDescripciones.innerHTML = " " + arregloDescripcionesServicios[i];

        

        newDiv.appendChild(newLabel);
        newDiv.appendChild(newSpan);

        newDivDescripciones.appendChild(newLabelDescripciones);
        newDivDescripciones.appendChild(newSpanDescripciones);


        divServicios.appendChild(newDiv);
        divServicios.appendChild(newDivDescripciones);
    }
}










