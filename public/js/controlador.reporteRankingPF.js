'use strict';

// let user = JSON.parse(sessionStorage.getItem("usuario"));
const tabla = document.querySelector('#tblReportePF tbody');
const btnImprimir = document.querySelector('#btnImprimir')

let idUsuarioCE = user._id;
let date = new Date();
let anno = date.getFullYear();

if (user.userType == "superAdministrador" || user.userType == "padreFamilia") {
    window.location.href = 'loSentimos.html';
}

let ranking = listarEvaluacionUsuario(idUsuarioCE);
// mostrarDatos();

function mostrarDatos() {

    tabla.innerHTML = '';

    if (!(typeof ranking == 'string')) {
        for (let i = 0; i < ranking.length; i++) {
            let fila = tabla.insertRow();

            fila.insertCell().innerHTML = ranking[i]['nameCE'];
            fila.insertCell().innerHTML = ranking[i]['stars'];
            fila.insertCell().innerHTML = ranking[i]['starsProm'];
            fila.insertCell().innerHTML = anno;
        }
    } else {
        tabla.innerHTML = "Este centro educativo no ha sido evaluado por ningún padre de familia";
    }
};

mostrarDatos();

function imprimir() {
    var mywindow = window.open('', 'PRINT', 'height=900,width=1200');
    mywindow.document.write('<html><head>');
    mywindow.document.write('<style>h1{margin-top:40px;margin-bottom: 60px;text-align: center;font-size: 25px;color: #2c3e50}#tblReportePF{border-collapse: collapse;width: 90%;margin: 0 auto;margin-top: 20px;margin-bottom: 40px;}th {background: #f9aa33;color: white;}td {color: #2c3e50;vertical-align: middle;}td:hover {color: white;background: #4a6572;}td, th {text-align: center;padding: 12px 1px;border: #2c3e50 solid 1px;vertical-align: middle;}</style>');
    mywindow.document.write('</head><body >');
    mywindow.document.write(document.getElementById('print').innerHTML);
    mywindow.document.write('</body></html>');
    mywindow.document.close(); // necesario para IE >= 10
    mywindow.focus(); // necesario para IE >= 10
    mywindow.print();
    mywindow.close();
    return true;
}
