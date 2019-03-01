'use strict';

let listarSucursales = () =>{

};

let registrarSucursal = (pcodigo, pnombre, ptelefono, pdireccion, pubicacion) =>{
     let request = $.ajax(
         {
             url: "http://localhost:4000/api/registrar_sucursal",
             method: "POST",
             data: {
                codigo: pcodigo,
                nombre: pnombre,
                telefono: ptelefono,
                direccion_exacta: pdireccion,
                ubicacion:  pubicacion
             },
             contentType : 'application/x-www-form-urlencoded; charset=UTF-8',
             dataType: "json"
         }
     );

     request.done(function (msg) {
             swal.fire(
                 {
                     type: 'success',
                     title: 'Se registró con éxito la sucursal',
                     text: `La sucursal ${pnombre} cuyo código es ${pcodigo}`+
                         `, teléfono es ${ptelefono} y se encuentra en ${pdireccion} `+
                         `se registró exitosamente.`
                 }
             );
         }
     );
     
     request.fail(function (jqXHR, textStatus) {

     });
};