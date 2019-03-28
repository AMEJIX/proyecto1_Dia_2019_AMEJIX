'use strict';



let listarCEUbicacion= () =>{
    let listaCEUbicacion= [];    
    let request = $.ajax({ 
      url: "http://localhost:4000/api/listarCEUbicacion",
      type: "GET",
      
      data: {
          
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async : false
  
    });
     
    request.done(function( res ) {
        listaCEUbicacion = res.centrosEducativos;
      
  
    });
     
    request.fail(function( jqXHR, textStatus ) {
      
    });  
    return listaCEUbicacion; 
  };