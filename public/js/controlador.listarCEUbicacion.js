'use strict';

let user = JSON.parse(sessionStorage.getItem("usuario"));
const conectado = sessionStorage.getItem('conectado');
const tipo_usuario = user.userType;
const cantonUsuario =user.canton;

if(conectado){
    if(tipo_usuario){
        'padreFamilia'
        let centrosEUbicacion = listarCEUbicacion();
        for(let i=0; i<centrosEUbicacion.length; i++){         
            
                const tablaCEUbicacion = document.querySelector('#tblCentrosCercanos tbody');
                const inputFiltro = document.querySelector('#txtFiltro');                                               
                mostrarcentrosEUbicacion();                
                inputFiltro.addEventListener('keyup', mostrarcentrosEUbicacion);               
                function mostrarcentrosEUbicacion(){
                    let centrosEUbicacion = listarCEUbicacion();
                    let filtro = inputFiltro.value;
                    tablaCEUbicacion.innerHTML= '';
                    // centrosEUbicacion [i] ['canton']
                    for(let i=0; i<centrosEUbicacion.length; i++){
                        if(cantonUsuario == centrosEUbicacion [i] ['canton']){
                            if(centrosEUbicacion[i]['centroEducativo'].toLowerCase().includes(filtro.toLowerCase())){
                                let fila = tablaCEUbicacion.insertRow();
                                fila.insertCell().innerHTML = centrosEUbicacion [i] ['centroEducativo'];
                                fila.insertCell().innerHTML = centrosEUbicacion [i] ['canton']; 
                                let imagenCE = fila.insertCell();
                                            
                                let imagen = document.createElement('img');
                                imagen.classList.add('celdaImagen');
                                    if(centrosEUbicacion [i] ['imagen']){
                                        imagen.src = centrosEUbicacion [i] ['imagen'];
                                    }else{
                                        imagen.src = 'img/userPlaceholder.png';
                                    }
                                imagenCE.appendChild(imagen); 
                                                
                        }};
                    }               
             
            }
        }   
        }  
}


