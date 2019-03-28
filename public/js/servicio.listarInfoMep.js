'use strict';


let listarInfoMEP = () =>{
  let infoGeneralMEP = [];
  let request = $.ajax({ 
    url: "http://localhost:4000/api/listarInfoMEP",
    method: "GET",
    data: {
       
    },
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    dataType: "json",
    async : false
  });
  
  request.done(function( res ) {
    infoGeneralMEP = res.infoSA;
  });
  request.fail(function( jqXHR, textStatus ) {
  });  
  return infoGeneralMEP; 
};

