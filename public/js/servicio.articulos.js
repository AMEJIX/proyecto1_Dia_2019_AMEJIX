'use strict';


let listarArticulos = (pIdCentro) =>{
    
  let listaArticulos= [];
  let request = $.ajax({ 
    
    url: "http://localhost:4000/api/listarArticulo",
    method: "POST",
    
    data: {        
        idCE : pIdCentro
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async : false

  });
   
  request.done(function( res ) {
    
      listaArticulos = res.articulos;           

  });
   
  request.fail(function( jqXHR, textStatus ) {
    
  });  
  return listaArticulos; 
};



let registrarArticulo = (pnombre, pdescripcion, pidCentroEducativo) =>{
    
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarArticulo",
        method: "POST",
        data: {
            nombre : pnombre,
            descripcion : pdescripcion,            
            idCE : pidCentroEducativo
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType : "json"

    });
    request.done(function( msg ) {
        swal.fire({
            type: 'success',
            title: 'Artículo registrado correctamente',
            text: `El artículo escolar ${pnombre} se registró con la descripción ${pdescripcion}`
        });
      });
       
      request.fail(function( jqXHR, textStatus ) {
        
      });
};


