'use strict';

let listarActividades= (pIdCentro) =>{
    let listaActividades= [];
    
    let request = $.ajax({ 
      url: "http://localhost:4000/api/listarActividades",
      method: "POST",      
      data: {
          idCE: pIdCentro
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async : false
  
    });
     
    request.done(function( res ) {
      listaActividades = res.actividades;
      
  
    });
     
    request.fail(function( jqXHR, textStatus ) {
      
    });  
    return listaActividades; 
  };
  





let registrarActividad = (pactividad, pdescripcion, pfecha, pimagen, pidCentroEducativo) =>{
    
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarActividad",
        method: "POST",
        data: {
            actividad : pactividad,
            descripcion : pdescripcion,
            fecha : pfecha,
            imagen : pimagen,
            idCE : pidCentroEducativo            
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType : "json"

    });
    request.done(function( msg ) {
        swal.fire({
            type: 'success',
            title: 'La actividad se ha registrado correctamente',
            text: `La actividad ${pactividad} se registró con la descripción ${pdescripcion}`
        });
      });
       
      request.fail(function( jqXHR, textStatus ) {
          
      });
};


