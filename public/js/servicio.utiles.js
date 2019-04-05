'use strict';


let listarUtilesNivel = (pnivel, pIdCentro) =>{
    
  let listaUtiles= [];
  let request = $.ajax({ 
    
    url: "http://localhost:4000/api/listarUtilNivel",
    method: "POST",
    
    data: {
        nivel : pnivel,
        idCE : pIdCentro
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async : false

  });
   
  request.done(function( res ) {
    
      listaUtiles = res.utiles;
    
    
    

  });
   
  request.fail(function( jqXHR, textStatus ) {
    
  });  
  return listaUtiles; 
};

let listarTodos= () =>{
    
    let listaUtiles= [];
    let request = $.ajax({ 
      
      url: "http://localhost:4000/api/listarTodos",
      method: "GET",
      
      data: {
          
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async : false
  
    });
     
    request.done(function( res ) {
      listaUtiles = res.utiles;
      
  
    });
     
    request.fail(function( jqXHR, textStatus ) {
      
    });  
    return listaUtiles; 
  };



let registrarUtil = (pnombre, pdescripcion, pcantidad, pnivel, pidCentroEducativo) =>{
    
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarUtil",
        method: "POST",
        data: {
            nombre : pnombre,
            descripcion : pdescripcion,
            cantidad : pcantidad,
            nivel : pnivel,
            idCE : pidCentroEducativo
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType : "json"

    });
    request.done(function( msg ) {
        // swal.fire({
        //     type: 'success',
        //     title: 'Util registrado correctamente',
        //     text: `El util escolar ${pnombre} se registró con la descripción ${pdescripcion}, la cantidad del útil fue ${pcantidad} y el nivel escolar es ${pnivel}`
        // });
      });
       
      request.fail(function( jqXHR, textStatus ) {
        
      });
};


