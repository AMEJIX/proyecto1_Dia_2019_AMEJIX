'use strict';

const txt_codigo = document.querySelector('#txt_codigo');
const txt_nombre = document.querySelector('#txt_nombre');
const txt_telefono = document.querySelector('#txt_telefono');
const txt_direccion = document.querySelector('#txt_direccion');

const btn_registrar = document.querySelector('#btn_registrar');


let validar = () =>{
    let error = false;

    if (txt_codigo.value === '') {
        error = true;
        txt_codigo.classList.add('error_input');
        txt_codigo.classList.remove('success_input');
    } else {
        txt_codigo.classList.remove('error_input');
        txt_codigo.classList.add('success_input');
    }

    if (txt_nombre.value === '') {
        error = true;
        txt_nombre.classList.add('error_input');
        txt_nombre.classList.remove('success_input');
    } else {
        txt_nombre.classList.remove('error_input');
        txt_nombre.classList.add('success_input');
    }

    if (txt_telefono.value === '') {
        error = true;
        txt_telefono.classList.add('error_input');
        txt_telefono.classList.remove('success_input');
    } else {
        txt_telefono.classList.remove('error_input');
        txt_telefono.classList.add('success_input');
    }

    if (txt_direccion.value === '') {
        error = true;
        txt_direccion.classList.add('error_input');
        txt_direccion.classList.remove('success_input');
    } else {
        txt_direccion.classList.remove('error_input');
        txt_direccion.classList.add('success_input');
    }

    return error;
};

let codigo, nombre, telefono, direccion, ubicacion;

let agregarSucursal = () =>{
    if (!validar())  {
        codigo = txt_codigo.value;
        nombre = txt_nombre.value;
        telefono = txt_telefono.value;
        direccion = txt_direccion.value;
        ubicacion  = 'Ubicación no dispobible';

        registrarSucursal(codigo, nombre, telefono, direccion, ubicacion);

        setTimeout("location.href='sucursales.html'", 3000);


    } else {
        swal.fire(
            {
                type: 'warning',
                title: 'Registro fallido de la sucursal',
                text: 'Asegúrese de llenar los campos correctamente'
            }
        );
    }
};

btn_registrar.addEventListener('click', agregarSucursal);