'use strict';

const txt_codigo = document.querySelector('#txt_codigo');
const txt_nombre = document.querySelector('#txt_nombre');
const slt_pais = document.querySelector('#slt_pais');

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

    if (slt_pais.value === '') {
        error = true;
        slt_pais.classList.add('error_input');
        slt_pais.classList.remove('success_input');
    } else {
        slt_pais.classList.remove('error_input');
        slt_pais.classList.add('success_input');
    }
    return error;
};

let codigo, nombre, pais;

let agregarEditorial = () =>{
    if (!validar()){
        codigo = txt_codigo.value;
        nombre = txt_nombre.value;
        pais = slt_pais.value;

        registrarEditorial(codigo, nombre, pais);

        setTimeout("location.href='editoriales.html'", 3500);


    } else {
        swal.fire(
            {
                type: 'warning',
                titile: 'Registro fallido de la editorial',
                text: 'Asegúrese de haber llenado bien los campos'
            }
        );
    }
};

btn_registrar.addEventListener('click', agregarEditorial);
