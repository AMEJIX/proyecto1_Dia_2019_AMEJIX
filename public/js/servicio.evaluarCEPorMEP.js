'use strict';

let listarCE= () =>{
    let listaCE= [];    
    let request = $.ajax({ 
      url: "http://localhost:4000/api/listarCE",
      type: "GET",
      
      data: {      
          
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType: "json",
      async : false
  
    });
     
    request.done(function( res ) {
        listaCE = res.centrosEducativos;
      
  
    });
     
    request.fail(function( jqXHR, textStatus ) {
      
    });  
    return listaCE; 
  };

  
let listarRangos= () =>{
   
  let listaRangos= [];
  let request = $.ajax({ 
    url: "http://localhost:4000/api/listarRangosEvaluacion",
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


let listarCriterios= () =>{
  let listaCriterios= [];
  
  let request = $.ajax({ 
    url: "http://localhost:4000/api/listarCriteriosEvaluacion",
    method: "GET",
    
    data: {
        
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async : false

  });
   
  request.done(function( res ) {
    listaCriterios = res.criterios;
    

  });
   
  request.fail(function( jqXHR, textStatus ) {
    
  });  
  return listaCriterios; 
};


let registrarEvaluacionMEP = (pnombre, ptotal, pestrellas, panno, pidCE) =>{
 
  let request = $.ajax({
      url: "http://localhost:4000/api/registrarEvaluacionMEP",
      method: "POST",
      data: {
          nombre: pnombre,
          total : ptotal,
          estrellas : pestrellas,
          anno : panno,
          idCE: pidCE          
      },
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      dataType : "json"

  });
  request.done(function( msg ) {
      swal.fire({
          type: 'success',
          title: 'La evaluación se ha registrado correctamente',
          text: `El ${pnombre} se evaluó con ${pestrellas}`,
          onClose: () => {
            window.location.href = 'evaluarCentroEducativoPorMEP.html';
          }    
      });
    });
     
    request.fail(function( jqXHR, textStatus ) {
      
    });
};



let listarCEEvaluados= (pidCE, panno) =>{
  let listaCE= [];    
  let request = $.ajax({ 
    url: "http://localhost:4000/api/listarCEEvaluados",
    type: "POST",    
    data: {      
      anno: panno,
      idCE: pidCE
        
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async : false

  });
   
  request.done(function( res ) {
      listaCE = res.centrosEducativosEvaluados;
    

  });
   
  request.fail(function( jqXHR, textStatus ) {
    
  });  
  return listaCE; 
};