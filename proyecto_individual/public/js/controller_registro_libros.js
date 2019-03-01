'use strict';

const txt_isbn = document.querySelector("input#txt_isbn");
const txt_title = document.querySelector("input#txt_titulo");
const slt_categoria = document.querySelector("select#slt_categoria");
const slt_editorial = document.querySelector("select#slt_editorial");
const txt_autor = document.querySelector("input#txt_autor");
const nbr_precio = document.querySelector("input#nbr_precio");


const btn_registrar = document.querySelector("button#btn_registrar");

let isbn, titulo, categoria, editorial, autor, precio;


let validar = () =>{

    let bError = false;

    if (txt_isbn.value === '') {
        bError = true;
        txt_isbn.classList.add("error_input");
        txt_isbn.classList.remove("success_input");
    } else {
        txt_isbn.classList.remove('error_input');
        txt_isbn.classList.add("success_input");
    }

    if (txt_title.value === '' ) {
        bError = true;
        txt_title.classList.add('error_input');
        txt_title.classList.remove("success_input");
    } else {
        txt_title.classList.remove('error_input');
        txt_title.classList.add("success_input");
    }

    if (slt_categoria.value === '' ) {
        bError = true;
        slt_categoria.classList.add('error_input');
        slt_categoria.classList.remove("success_input");
    } else {
        slt_categoria.classList.remove('error_input');
        slt_categoria.classList.add("success_input");
    }

    if (slt_editorial.value === '') {
        bError = true;
        slt_editorial.classList.add('error_input');
        slt_editorial.classList.remove("success_input");
    } else {
        slt_editorial.classList.remove('error_input');
        slt_editorial.classList.add("success_input");
    }

    if (txt_autor.value === '') {
        bError = true;
        txt_autor.classList.add('error_input');
        txt_autor.classList.remove("success_input");
    } else {
        txt_autor.classList.remove('error_input');
        txt_autor.classList.add("success_input");
    }

    if (nbr_precio.value === '') {
        bError = true;
        nbr_precio.classList.add('error_input');
        nbr_precio.classList.remove("success_input");
    } else {
        nbr_precio.classList.remove('error_input');
        nbr_precio.classList.add("success_input");
    }
    return bError;
};

let agregarLibro = () =>{


    if (!validar()){
        isbn = txt_isbn.value;
        titulo = txt_title.value;
        categoria = slt_categoria.value;
        editorial = slt_editorial.value;
        autor = txt_autor.value;
        precio = nbr_precio.value;
        var portada = 'Portada no disponible';

        registrarLibro(isbn, titulo, categoria, editorial, autor, precio, portada);

        setTimeout("location.href='libros.html'", 4000);


    } else {
        swal.fire({
            type: 'warning',
            title: 'Registro fallido del libro',
            text: `Asegúrese de llenar los campos correctamente.`
        });
    }


};


btn_registrar.addEventListener("click", agregarLibro);

