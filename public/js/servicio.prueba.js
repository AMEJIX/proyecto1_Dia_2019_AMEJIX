'use strict';


let listarCEducativos= () =>{
    let listaCE= []; 

    let request = $.ajax({ 
      url: "http://localhost:4000/api/listarCentros",
      method: "GET",
      
      data: {
          
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async : false
  
    });     
    request.done(function( res ) {
        listaCE = res.centroEducativo;     
  
    });     
    request.fail(function( jqXHR, textStatus ) {
      
    });  
    return listaCE; 
  };