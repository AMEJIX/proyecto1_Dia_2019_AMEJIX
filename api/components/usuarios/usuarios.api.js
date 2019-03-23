'use strict';

const nodemailer = require("nodemailer");
const modelo_usuario = require('./usuarios.model');

module.exports.registrar = (req, res) => {


    let nuevo_usuario = new modelo_usuario(

        {

            //PF
            userType: req.body.userType,
            nombre: req.body.nombre,
            segundoNombre: req.body.segundoNombre,
            apellido: req.body.apellido,
            segundoApellido: req.body.gundoApellido,
            identificacion: req.body.identificacion,
            nacionalidad: req.body.nacionalidad,
            email: req.body.email,
            telefono: req.body.telefono,
            provincia: req.body.provincia,
            canton: req.body.canton,
            distrito: req.body.distrito,
            contrasenna: req.body.contrasenna,
            edades: req.body.edades,
            imagenPF: req.body.imagenPF,

            //CE
            centroEducativo: req.body.centroEducativo,
            cedulaJuridica: req.body.cedulaJuridica,
            nombreComercial: req.body.nombreComercial,
            anno: req.body.anno,
            genero: req.body.genero,
            religion: req.body.religion,
            telCE: req.body.telCE,
            web: req.body.web,
            facebook: req.body.facebook,
            twitter: req.body.twitter,
            instagram: req.body.instagram,
            fax: req.body.fax,
            histroia: req.body.histroia,

            nombreCEP: req.body.nombreCEP,
            segundoNombreCEP: req.body.segundoNombreCEP,
            apellidoCEP: req.body.apellidoCEP,
            segundoApellidoCEP: req.body.segundoApellidoCEP,

            departamento: req.body.departamento,
            telCEP: req.body.telCEP,
            extension: req.body.extension,
            numIDCEP: req.body.numIDCEP,
            emailCEP: req.body.emailCEP,
            lat: req.body.lat,
            lng: req.body.lng,
            privacidad: req.body.privacidad,
            clasificacion: req.body.clasificacion,
            tipo: req.body.tipo,
            grados: req.body.grados,
            imagen: req.body.imagen,
            imagenCEP: req.body.imagenCEP,
            direccionExacta: req.body.direccionExacta,
            idiomas: req.body.idiomas,
            servicios : req.body.servicios,
            descipcionesServicio : req.body.descipcionesServicio,
    




        }
    );

    nuevo_usuario.save(function (error) {
        if (error) {
            res.json(
                {
                    success: false,
                    msj: 'No se pudo registrar el usuario: ' + error,
                }
            )
        } else {

            /* En caso de que se logre registrar el usuario, le enviaremos un corre electronico
            -- Tendra su contrasenna momentaria
            
            */


            //se define el correo que se va utilizar para enviar el email
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                port: 4000,
                secure: false,
                auth: {
                    user: 'sicen.amejix@gmail.com',
                    pass: 'amejix12345'
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            //se redacta el email

            let email = req.body.email;
            let nombre = req.body.nombre;
            let contrasenna = req.body.contrasenna;


            let mailOptions = {
                from: 'sicen.amejix@gmail.com',
                to: email,
                subject: 'Bienvenido a Sicen - Verificación',
                html: `<html>

                <head>
                    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
                </head>
                
                <body style="font-family: 'Montserrat', sans-serif; background-size: cover; ">
                    <main style="background: #4a6572; width:100%; height: 100%;">
                        <div style="background: #4a6572; max-width: 700px; padding: 10px; margin:0 auto; border-collapse: collapse;">
                
                            <div style="color: #fff; margin: 4% 10% 2%; font-family: sans-serif;">
                
                                <h2 style="color: #fff; margin: 0 0 7px; font-size: 40px; margin: 0 auto; text-align: center; padding-bottom: 30px">
                                    Sicen
                                </h2>
                
                                <p style="margin: 2px; font-size: 22px; padding-left: 20px; color: #fff;">
                                    Saludos ${nombre}, se ha registrado exitosamente a la aplicación Sicen del Ministerio de Educación.
                                </p>
                
                                <ul style="font-size: 18px; color: #fff; margin: 10px 0; padding-left: 50px;">
                                    <ul style="padding: 10px;">Su nombre de usuario es: ${email}</ul>
                                    <ul style="padding: 10px;">Su codigo de verificacíon es: ${contrasenna}</ul>
                                </ul>
                                
                                <div style="width: 100%; text-align: center; padding-top: 20px;">
                                    <a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #f9aa33"
                                        href="pendiente.html">Ingresar a Sicen</a>
                                </div>
                            </div>
                        </div>
                
                
                    </main>
                </body>
                
                </html>`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });


            res.json(
                {
                    success: true,
                    msj: 'Se registro el usuario correctamente'
                }
            )
        }
    });

};


module.exports.validar = (req, res) => {

    modelo_usuario.findOne({ email: req.body.email }).then(
        function (usuario) {
            if (usuario) {
                if (usuario.contrasenna == req.body.contrasenna) {
                    console.log("contraseña correcta");
                    res.json({
                        success: true,
                        usuario: usuario
                    })
                } else {
                    res.json({
                        success: false,
                        msg: 'La contraseña no es válida'
                    })
                }
            } else {
                res.json({
                    success: false,
                    msg: 'El usuario no exitste'
                })
            }
        }


    )

}