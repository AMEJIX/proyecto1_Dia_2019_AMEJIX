'use strict';

let idUsuario;

if (user.userType === 'padreFamilia') {
  window.location = 'loSentimos.html'
} else if (user.userType === 'superAdministrador') {
  idUsuario = IdGeneralCE;
}

let visitas = obtenerVisita(user._id);
let fechasVisitas = visitas.fechas;

console.log(fechasVisitas);

new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.

  data: [
    { year: '2009', Visitas: 1 },
    { year: '2010', Visitas: 1 },
    { year: '2011', Visitas: 1 },
    { year: '2012', Visitas: 1 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['Visitas'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Visitas'],

  resize: true,
  lineWidth: 2,
  lineColors: ['#F9AA33']
});