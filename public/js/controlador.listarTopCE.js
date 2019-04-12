'use strict';



const sectionCardsTop = document.querySelector('#seccionRankings');
const selectTipoTop = document.querySelector('#selectTipoTop');
const anno = new Date().getFullYear();

let mostrarDatosTop = () =>{

    let centrosETop = listarCETop(anno);
    console.log(centrosETop);

    for(let  i=0; i<centrosETop.length; i++){
        centrosETop[i]['posicion'] = i+1;
        if(centrosETop[i]['imagen'] ==  'sinImagen'){
            centrosETop[i]['imagen'] = 'img/icons8-user.png';
        }
        
    }

    switch(selectTipoTop.value){
        //top general
        case "1":
            for(let a=0; a < 10; a++){
                let cardCETop = document.createElement('div');
                cardCETop.classList.add('cardCETop');

                let divPosicion = document.createElement('div');
                divPosicion.classList.add('divPosicion');

                let h2Posicion = document.createElement('h2');
                h2Posicion.classList.add('h2Posicion');
                h2Posicion.textContent = centrosETop[a]['posicion'];

                let divImagen = document.createElement('div');
                divImagen.classList.add('divImagen');

                let imagen = document.createElement('img');
                imagen.classList.add('imagenCE');
                imagen.src = centrosETop[a]['imagen'];

                let divNombre = document.createElement('div');
                divNombre.classList.add('divNombre');

                let h2Nombre = document.createElement('h2');
                h2Nombre.classList.add('h2Nombre');
                h2Nombre.textContent = centrosETop[a]['nombre'];

                let divEstrellas = document.createElement('div');
                divEstrellas.classList.add('divEstrellas');
                // if(centrosETop[a]['estrellas'])
                let h2Estrellas = document.createElement('h2');
                h2Estrellas.classList.add('h2Estrellas');
                h2Estrellas.textContent = centrosETop[a]['estrellas'];

                divPosicion.appendChild(h2Posicion);
                divImagen.appendChild(imagen);
                divNombre.appendChild(h2Nombre);
                divEstrellas.appendChild(h2Estrellas);               


                cardCETop.appendChild(divPosicion);
                cardCETop.appendChild(divImagen);
                cardCETop.appendChild(divNombre);
                cardCETop.appendChild(divEstrellas);
                sectionCardsTop.appendChild(cardCETop);

            }

        
        // top
        case "Escuela, ":
            let efiltro = selectTipoTop.value;
            let escuelas;
            let c = 0;

            for(let b= 0; b< centrosETop.length; b++){
                if(centrosETop[b]['tipo'] == efiltro){
                    escuelas[c] = centrosETop[b]; 
                    c = c + 1;}               
            }
            
            
            for(let a=0; a < 10; a++){
             
                    let cardCETop = document.createElement('div');
                    cardCETop.classList.add('cardCETop');
    
                    let divPosicion = document.createElement('div');
                    divPosicion.classList.add('divPosicion');
    
                    let h2Posicion = document.createElement('h2');
                    h2Posicion.classList.add('h2Posicion');
                    h2Posicion.textContent = escuelas[a]['posicion'];
    
                    let divImagen = document.createElement('div');
                    divImagen.classList.add('divImagen');
    
                    let imagen = document.createElement('img');
                    imagen.classList.add('imagenCE');
                    imagen.src = escuelas[a]['imagen'];
    
                    let divNombre = document.createElement('div');
                    divNombre.classList.add('divNombre');
    
                    let h2Nombre = document.createElement('h2');
                    h2Nombre.classList.add('h2Nombre');
                    h2Nombre.textContent = escuelas[a]['nombre'];
    
                    let divEstrellas = document.createElement('div');
                    divEstrellas.classList.add('divEstrellas');
    
                    let h2Estrellas = document.createElement('h2');
                    h2Estrellas.classList.add('h2Estrellas');
                    h2Estrellas.textContent = escuelas[a]['estrellas'];
    
                    divPosicion.appendChild(h2Posicion);
                    divImagen.appendChild(imagen);
                    divNombre.appendChild(h2Nombre);
                    divEstrellas.appendChild(h2Estrellas);               
    
    
                    cardCETop.appendChild(divPosicion);
                    cardCETop.appendChild(divImagen);
                    cardCETop.appendChild(divNombre);
                    cardCETop.appendChild(divEstrellas);
                    sectionCardsTop.appendChild(cardCETop);

                              


            }
        
        case "Colegio, ":
            let cfiltro = selectTipoTop.value;

            let colegios = [];
            let d = 0;

            for(let j= 0; j< centrosETop.length; j++){
                if(centrosETop[j]['tipo'] == cfiltro){
                    console.log(centrosETop[j]);
                   colegios[d] = centrosETop[j]; 
                   
                    d = d + 1;
                }               
            }

            for(let a=0; a < 10; a++){         

                let cardCETop = document.createElement('div');
                cardCETop.classList.add('cardCETop');

                let divPosicion = document.createElement('div');
                divPosicion.classList.add('divPosicion');

                let h2Posicion = document.createElement('h2');
                h2Posicion.classList.add('h2Posicion');
                h2Posicion.textContent = colegios[a]['posicion'];

                let divImagen = document.createElement('div');
                divImagen.classList.add('divImagen');

                let imagen = document.createElement('img');
                imagen.classList.add('imagenCE');
                imagen.src = colegios[a]['imagen'];

                let divNombre = document.createElement('div');
                divNombre.classList.add('divNombre');

                let h2Nombre = document.createElement('h2');
                h2Nombre.classList.add('h2Nombre');
                h2Nombre.textContent = colegios[a]['nombre'];

                let divEstrellas = document.createElement('div');
                divEstrellas.classList.add('divEstrellas');

                let h2Estrellas = document.createElement('h2');
                h2Estrellas.classList.add('h2Estrellas');
                h2Estrellas.textContent = colegios[a]['estrellas'];

                divPosicion.appendChild(h2Posicion);
                divImagen.appendChild(imagen);
                divNombre.appendChild(h2Nombre);
                divEstrellas.appendChild(h2Estrellas);               


                cardCETop.appendChild(divPosicion);
                cardCETop.appendChild(divImagen);
                cardCETop.appendChild(divNombre);
                cardCETop.appendChild(divEstrellas);
                sectionCardsTop.appendChild(cardCETop);

            }

               
                
        }
        
    }





selectTipoTop.addEventListener('change', mostrarDatosTop);


