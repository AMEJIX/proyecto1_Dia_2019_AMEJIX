'use strict';

const modeloCE = require('../usuarios/usuarios.model');

module.exports.listarCE = (req, res)=>{    
    modeloCE.find({userType: 'centroEducativo'}).then(
        function(centroEducativo){
            if(centroEducativo.length >0){
                res.json(
                    {
                        success: true,
                        centroEducativo: centroEducativo
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        centroEducativo: 'No se encontraron centros educativos registrados'
                    }
                )
            }
        }
    )
}; 

