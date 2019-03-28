'use strict';

let listarRangos= () =>{
   
    let listaRangos= [];
    let request = $.ajax({ 
      url: "http://localhost:4000/api/listarRangos",
      method: "GET",
      data: {
          
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async : false
  
    });
     
    request.done(function( res ) {
      listaRangos = res.rangos;
    
  
    });
     
    request.fail(function( jqXHR, textStatus ) {
      
    });  
    return listaRangos; 
  };


  let registrarRango = (prango, pvalorMinimo, pvalorMaximo, pestrellas) =>{
    
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarRango",
        method: "POST",
        data: {
            rango : prango,
            valorMinimo : pvalorMinimo,
            valorMaximo : pvalorMaximo,
            estrellas : pestrellas
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType : "json"

    });
    request.done(function( msg ) {
        swal.fire({
            type: 'success',
            title: 'El rango se ha registrado correctamente',
            text: `El ${prango} se registró con la cantidad de estrellas de ${pestrellas}.`
        });
      });
       
      request.fail(function( jqXHR, textStatus ) {
        
      });
};