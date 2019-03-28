'use strict';

let listarCriterios= () =>{
    let listaCriterios= [];
    
    let request = $.ajax({ 
      url: "http://localhost:4000/api/listarCriterios",
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
  


  



  let registrarCriterio = (pcriterio, pdescripcion, ppuntaje) =>{
    
    let request = $.ajax({
        url: "http://localhost:4000/api/registrarCriterio",
        method: "POST",
        data: {
            criterio : pcriterio,
            descripcion : pdescripcion,
            puntaje : ppuntaje            
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType : "json"

    });
    request.done(function( msg ) {
        swal.fire({
            type: 'success',
            title: 'El criterio se ha registrado correctamente',
            text: `El ${pcriterio} se registró con el puntaje ${ppuntaje}`
        });
      });
       
      request.fail(function( jqXHR, textStatus ) {
        
      });
};








  // let registrarCriterio = (pcriterio, pdescripcion, ppuntaje) =>{

  //   // let listaTodosCriterios = listarCriterios();

  //   // console.log(listaTodosCriterios.length);
  //   // let sumaPuntaje = 0;
  //   // for (let i = 0; i < listaTodosCriterios.length; i++){
  //   //     sumaPuntaje = sumaPuntaje + listaTodosCriterios [i] ['puntaje'];
  //   // }

  //   // if(sumaPuntaje < 100){
  //     let request = $.ajax({
  //     url: "http://localhost:4000/api/registrarCriterio",
  //     method: "POST",
  //     data: {
  //         criterio : pcriterio,
  //         descripcion : pdescripcion,
  //         puntaje : ppuntaje
  //     },
  //     contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
  //     dataType : "json"

  // });
  // request.done(function( msg ) {
  //     swal.fire({
  //         type: 'success',
  //         title: 'Criterio registrado correctamente',
  //         text: `El ${pcriterio} se registró con el puntaje de ${ppuntaje}`
  //     });
  //   });
     
  //   request.fail(function( jqXHR, textStatus ) {
      
  //   });

    // }
    // else{
    //   swal.fire({
    //     type: 'warning',
    //     title: 'El rango no se registró correctamente',
    //     text: 'El puntaje no se permite'
    // });
    // }
    
// };



  

