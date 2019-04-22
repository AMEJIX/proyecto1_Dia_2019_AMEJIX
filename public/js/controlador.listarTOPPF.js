'use strict';

let idCE = user._id;
let topGeneral = listarEvaluacion();
// let listaComentarios = listaComentarios(idCE);

const topGeneral = document.querySelector('#topGeneral');
const topColegios = document.querySelector('#topColegios');
const topEscuelas = document.querySelector('#topEscuelas');

const select = document.querySelector('#selectTipoTop');

console.log(evaluacion);

// function ocultar () {
//     switch (select.value) {
    
//         case "1":
//             topGeneral.style.display = 'block';
//             console.log(select.value);
//             break;
    
//         case "2":
//             topColegios.style.display = 'block';
//             console.log(select.value);
//             break;
    
//         case "3":
//             topEscuelas.style.display = 'block';
//             console.log(select.value);
//             break;
    
//         default:
//             topGeneral.style.display = 'none';
//             topColegios.style.display = 'none';
//             topEscuelas.style.display = 'none';
//             break;
//     }
// }

// select.addEventListener('change', mostrarTopGeneral);

let mostrarTopGeneral = () => {

    for (let i = 0; i < 10; i++) {

        let boxCE = document.createElement('div');
        boxCE.classList.add('boxCE');

        let wrapperCE = document.createElement('div');
        wrapperCE.classList.add('wrapperCE');

        let position = document.createElement('p');
        position.classList.add('position');
        position.textContent = i + 1;

        let photoCE = document.createElement('div');
        photoCE.classList.add('photoCE');
        photoCE.style.backgroundImage = `url(${evaluacion[i]['photoCE']})`;

        let nameCE = document.createElement('h4');
        nameCE.classList.add('nameCE');
        nameCE.textContent = evaluacion[i]['nameCE'];

        let provinciaCE = document.createElement('h4');
        provinciaCE.classList.add('provinciaCE');
        provinciaCE.textContent = evaluacion[i]['provinciaCE'];

        let starsRate = document.createElement('div');
        starsRate.classList.add('starsRate');

        let star1;
        let star2;
        let star3;
        let star4;
        let star5;

        let starsCE = Math.round(evaluacion[i]['starsProm']);

        switch (starsCE) {
            case 0:
                star1 = document.createElement('i');
                star1.innerHTML = '<i class="fas fa-star"></i>';
                star1.classList.add('starColor');

                star2 = document.createElement('i');
                star2.innerHTML = '<i class="fa fa-star-o"></i>';
                star2.classList.add('starColor');

                star3 = document.createElement('i');
                star3.innerHTML = '<i class="fa fa-star-o"></i>';
                star3.classList.add('starColor');

                star4 = document.createElement('i');
                star4.innerHTML = '<i class="fa fa-star-o"></i>';
                star4.classList.add('starColor');

                star5 = document.createElement('i');
                star5.innerHTML = '<i class="fa fa-star-o"></i>';
                star5.classList.add('starColor');
                break;

            case 1:
                star1 = document.createElement('i');
                star1.innerHTML = '<i class="fas fa-star"></i>';
                star1.classList.add('starColor');

                star2 = document.createElement('i');
                star2.innerHTML = '<i class="fa fa-star-o"></i>';
                star2.classList.add('starColor');

                star3 = document.createElement('i');
                star3.innerHTML = '<i class="fa fa-star-o"></i>';
                star3.classList.add('starColor');

                star4 = document.createElement('i');
                star4.innerHTML = '<i class="fa fa-star-o"></i>';
                star4.classList.add('starColor');

                star5 = document.createElement('i');
                star5.innerHTML = '<i class="fa fa-star-o"></i>';
                star5.classList.add('starColor');
                break;

            case 2:
                star1 = document.createElement('i');
                star1.innerHTML = '<i class="fas fa-star"></i>';
                star1.classList.add('starColor');

                star2 = document.createElement('i');
                star2.innerHTML = '<i class="fas fa-star"></i>';
                star2.classList.add('starColor');

                star3 = document.createElement('i');
                star3.innerHTML = '<i class="fa fa-star-o"></i>';
                star3.classList.add('starColor');

                star4 = document.createElement('i');
                star4.innerHTML = '<i class="fa fa-star-o"></i>';
                star4.classList.add('starColor');

                star5 = document.createElement('i');
                star5.innerHTML = '<i class="fa fa-star-o"></i>';
                star5.classList.add('starColor');
                break;

            case 3:
                star1 = document.createElement('i');
                star1.innerHTML = '<i class="fas fa-star"></i>';
                star1.classList.add('starColor');

                star2 = document.createElement('i');
                star2.innerHTML = '<i class="fas fa-star"></i>';
                star2.classList.add('starColor');

                star3 = document.createElement('i');
                star3.innerHTML = '<i class="fas fa-star"></i>';
                star3.classList.add('starColor');

                star4 = document.createElement('i');
                star4.innerHTML = '<i class="fa fa-star-o"></i>';
                star4.classList.add('starColor');

                star5 = document.createElement('i');
                star5.innerHTML = '<i class="fa fa-star-o"></i>';
                star5.classList.add('starColor');
                break;

            case 4:
                star1 = document.createElement('i');
                star1.innerHTML = '<i class="fas fa-star"></i>';
                star1.classList.add('starColor');

                star2 = document.createElement('i');
                star2.innerHTML = '<i class="fas fa-star"></i>';
                star2.classList.add('starColor');

                star3 = document.createElement('i');
                star3.innerHTML = '<i class="fas fa-star"></i>';
                star3.classList.add('starColor');

                star4 = document.createElement('i');
                star4.innerHTML = '<i class="fas fa-star"></i>';
                star4.classList.add('starColor');

                star5 = document.createElement('i');
                star5.innerHTML = '<i class="fa fa-star-o"></i>';
                star5.classList.add('starColor');
                break;

            case 5:
                star1 = document.createElement('i');
                star1.innerHTML = '<i class="fas fa-star"></i>';
                star1.classList.add('starColor');

                star2 = document.createElement('i');
                star2.innerHTML = '<i class="fas fa-star"></i>';
                star2.classList.add('starColor');

                star3 = document.createElement('i');
                star3.innerHTML = '<i class="fas fa-star"></i>';
                star3.classList.add('starColor');

                star4 = document.createElement('i');
                star4.innerHTML = '<i class="fas fa-star"></i>';
                star4.classList.add('starColor');

                star5 = document.createElement('i');
                star5.innerHTML = '<i class="fas fa-star"></i>';
                star5.classList.add('starColor');
                break;

            default:
                break;
        }

        topGeneral.appendChild(boxCE);
        boxCE.appendChild(wrapperCE);

        wrapperCE.appendChild(position);
        wrapperCE.appendChild(photoCE);
        wrapperCE.appendChild(nameCE);
        wrapperCE.appendChild(provinciaCE);
        wrapperCE.appendChild(starsRate);

        starsRate.appendChild(star1);
        starsRate.appendChild(star2);
        starsRate.appendChild(star3);
        starsRate.appendChild(star4);
        starsRate.appendChild(star5);

    };
};


// let mostrarTopColegios = () => {

//     for (let i = 0; i < 10; i++) {

//         let boxCE = document.createElement('div');
//         boxCE.classList.add('boxCE');

//         let wrapperCE = document.createElement('div');
//         wrapperCE.classList.add('wrapperCE');

//         let position = document.createElement('p');
//         position.classList.add('position');
//         position.textContent = i++;

//         let photoCE = document.createElement('div');
//         photoCE.classList.add('photoCE');
//         photoCE.style.backgroundImage = `url(${evaluacion[i]['photoCE']})`;

//         let nameCE = document.createElement('h4');
//         nameCE.classList.add('nameCE');
//         nameCE.textContent = evaluacion[i]['nameCE'];

//         let provinciaCE = document.createElement('h4');
//         provinciaCE.classList.add('provinciaCE');
//         provinciaCE.textContent = evaluacion[i]['provinciaCE'];

//         let starsRate = document.createElement('div');
//         starsRate.classList.add('starsRate');

//         starsCE = evaluacion[i]['stars'] / listaComentarios.length;

//         let star1;
//         let star2;
//         let star3;
//         let star4;
//         let star5;

//         switch (starsCE) {

//             case starsCE < 1:
//                 star1 = document.createElement('i');
//                 star1.innerHTML = '<i class="fas fa-star"></i>';
//                 star1.classList.add('starColor');

//                 star2 = document.createElement('i');
//                 star2.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star2.classList.add('starColor');

//                 star3 = document.createElement('i');
//                 star3.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star3.classList.add('starColor');

//                 star4 = document.createElement('i');
//                 star4.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star4.classList.add('starColor');

//                 star5 = document.createElement('i');
//                 star5.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star5.classList.add('starColor');
//                 break;

//             case starsCE >= 1:
//                 star1 = document.createElement('i');
//                 star1.innerHTML = '<i class="fas fa-star"></i>';
//                 star1.classList.add('starColor');

//                 star2 = document.createElement('i');
//                 star2.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star2.classList.add('starColor');

//                 star3 = document.createElement('i');
//                 star3.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star3.classList.add('starColor');

//                 star4 = document.createElement('i');
//                 star4.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star4.classList.add('starColor');

//                 star5 = document.createElement('i');
//                 star5.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star5.classList.add('starColor');
//                 break;

//             case starsCE >= 1.5:
//                 star1 = document.createElement('i');
//                 star1.innerHTML = '<i class="fas fa-star"></i>';
//                 star1.classList.add('starColor');

//                 star2 = document.createElement('i');
//                 star2.innerHTML = '<i class="fas fa-star"></i>';
//                 star2.classList.add('starColor');

//                 star3 = document.createElement('i');
//                 star3.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star3.classList.add('starColor');

//                 star4 = document.createElement('i');
//                 star4.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star4.classList.add('starColor');

//                 star5 = document.createElement('i');
//                 star5.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star5.classList.add('starColor');
//                 break;

//             case starsCE >= 2.5:
//                 star1 = document.createElement('i');
//                 star1.innerHTML = '<i class="fas fa-star"></i>';
//                 star1.classList.add('starColor');

//                 star2 = document.createElement('i');
//                 star2.innerHTML = '<i class="fas fa-star"></i>';
//                 star2.classList.add('starColor');

//                 star3 = document.createElement('i');
//                 star3.innerHTML = '<i class="fas fa-star"></i>';
//                 star3.classList.add('starColor');

//                 star4 = document.createElement('i');
//                 star4.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star4.classList.add('starColor');

//                 star5 = document.createElement('i');
//                 star5.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star5.classList.add('starColor');
//                 break;

//             case starsCE >= 3.5:
//                 star1 = document.createElement('i');
//                 star1.innerHTML = '<i class="fas fa-star"></i>';
//                 star1.classList.add('starColor');

//                 star2 = document.createElement('i');
//                 star2.innerHTML = '<i class="fas fa-star"></i>';
//                 star2.classList.add('starColor');

//                 star3 = document.createElement('i');
//                 star3.innerHTML = '<i class="fas fa-star"></i>';
//                 star3.classList.add('starColor');

//                 star4 = document.createElement('i');
//                 star4.innerHTML = '<i class="fas fa-star"></i>';
//                 star4.classList.add('starColor');

//                 star5 = document.createElement('i');
//                 star5.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star5.classList.add('starColor');
//                 break;

//             case starsCE >= 4.5:
//                 star1 = document.createElement('i');
//                 star1.innerHTML = '<i class="fas fa-star"></i>';
//                 star1.classList.add('starColor');

//                 star2 = document.createElement('i');
//                 star2.innerHTML = '<i class="fas fa-star"></i>';
//                 star2.classList.add('starColor');

//                 star3 = document.createElement('i');
//                 star3.innerHTML = '<i class="fas fa-star"></i>';
//                 star3.classList.add('starColor');

//                 star4 = document.createElement('i');
//                 star4.innerHTML = '<i class="fas fa-star"></i>';
//                 star4.classList.add('starColor');

//                 star5 = document.createElement('i');
//                 star5.innerHTML = '<i class="fas fa-star"></i>';
//                 star5.classList.add('starColor');
//                 break;

//             case starsCE >= 5:
//                 star1 = document.createElement('i');
//                 star1.innerHTML = '<i class="fas fa-star"></i>';
//                 star1.classList.add('starColor');

//                 star2 = document.createElement('i');
//                 star2.innerHTML = '<i class="fas fa-star"></i>';
//                 star2.classList.add('starColor');

//                 star3 = document.createElement('i');
//                 star3.innerHTML = '<i class="fas fa-star"></i>';
//                 star3.classList.add('starColor');

//                 star4 = document.createElement('i');
//                 star4.innerHTML = '<i class="fas fa-star"></i>';
//                 star4.classList.add('starColor');

//                 star5 = document.createElement('i');
//                 star5.innerHTML = '<i class="fas fa-star"></i>';
//                 star5.classList.add('starColor');
//                 break;

//             default:
//                 break;
//         }

//         boxCE.appendChild(wrapperCE);

//         wrapperCE.appendChild(position);
//         wrapperCE.appendChild(photoCE);
//         wrapperCE.appendChild(nameCE);
//         wrapperCE.appendChild(provinciaCE);
//         wrapperCE.appendChild(starsRate);

//         starsRate.appendChild(star1);
//         starsRate.appendChild(star2);
//         starsRate.appendChild(star3);
//         starsRate.appendChild(star4);
//         starsRate.appendChild(star5);

//     };
// };

// let mostrarTopEscuelas = () => {

//     for (let i = 0; i < 10; i++) {

//         let boxCE = document.createElement('div');
//         boxCE.classList.add('boxCE');

//         let wrapperCE = document.createElement('div');
//         wrapperCE.classList.add('wrapperCE');

//         let position = document.createElement('p');
//         position.classList.add('position');
//         position.textContent = i++;

//         let photoCE = document.createElement('div');
//         photoCE.classList.add('photoCE');
//         photoCE.style.backgroundImage = `url(${evaluacion[i]['photoCE']})`;

//         let nameCE = document.createElement('h4');
//         nameCE.classList.add('nameCE');
//         nameCE.textContent = evaluacion[i]['nameCE'];

//         let provinciaCE = document.createElement('h4');
//         provinciaCE.classList.add('provinciaCE');
//         provinciaCE.textContent = evaluacion[i]['provinciaCE'];

//         let starsRate = document.createElement('div');
//         starsRate.classList.add('starsRate');

//         starsCE = evaluacion[i]['stars'] / listaComentarios.length;

//         let star1;
//         let star2;
//         let star3;
//         let star4;
//         let star5;

//         switch (starsCE) {

//             case starsCE < 1:
//                 star1 = document.createElement('i');
//                 star1.innerHTML = '<i class="fas fa-star"></i>';
//                 star1.classList.add('starColor');

//                 star2 = document.createElement('i');
//                 star2.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star2.classList.add('starColor');

//                 star3 = document.createElement('i');
//                 star3.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star3.classList.add('starColor');

//                 star4 = document.createElement('i');
//                 star4.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star4.classList.add('starColor');

//                 star5 = document.createElement('i');
//                 star5.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star5.classList.add('starColor');
//                 break;

//             case starsCE >= 1:
//                 star1 = document.createElement('i');
//                 star1.innerHTML = '<i class="fas fa-star"></i>';
//                 star1.classList.add('starColor');

//                 star2 = document.createElement('i');
//                 star2.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star2.classList.add('starColor');

//                 star3 = document.createElement('i');
//                 star3.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star3.classList.add('starColor');

//                 star4 = document.createElement('i');
//                 star4.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star4.classList.add('starColor');

//                 star5 = document.createElement('i');
//                 star5.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star5.classList.add('starColor');
//                 break;

//             case starsCE >= 1.5:
//                 star1 = document.createElement('i');
//                 star1.innerHTML = '<i class="fas fa-star"></i>';
//                 star1.classList.add('starColor');

//                 star2 = document.createElement('i');
//                 star2.innerHTML = '<i class="fas fa-star"></i>';
//                 star2.classList.add('starColor');

//                 star3 = document.createElement('i');
//                 star3.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star3.classList.add('starColor');

//                 star4 = document.createElement('i');
//                 star4.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star4.classList.add('starColor');

//                 star5 = document.createElement('i');
//                 star5.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star5.classList.add('starColor');
//                 break;

//             case starsCE >= 2.5:
//                 star1 = document.createElement('i');
//                 star1.innerHTML = '<i class="fas fa-star"></i>';
//                 star1.classList.add('starColor');

//                 star2 = document.createElement('i');
//                 star2.innerHTML = '<i class="fas fa-star"></i>';
//                 star2.classList.add('starColor');

//                 star3 = document.createElement('i');
//                 star3.innerHTML = '<i class="fas fa-star"></i>';
//                 star3.classList.add('starColor');

//                 star4 = document.createElement('i');
//                 star4.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star4.classList.add('starColor');

//                 star5 = document.createElement('i');
//                 star5.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star5.classList.add('starColor');
//                 break;

//             case starsCE >= 3.5:
//                 star1 = document.createElement('i');
//                 star1.innerHTML = '<i class="fas fa-star"></i>';
//                 star1.classList.add('starColor');

//                 star2 = document.createElement('i');
//                 star2.innerHTML = '<i class="fas fa-star"></i>';
//                 star2.classList.add('starColor');

//                 star3 = document.createElement('i');
//                 star3.innerHTML = '<i class="fas fa-star"></i>';
//                 star3.classList.add('starColor');

//                 star4 = document.createElement('i');
//                 star4.innerHTML = '<i class="fas fa-star"></i>';
//                 star4.classList.add('starColor');

//                 star5 = document.createElement('i');
//                 star5.innerHTML = '<i class="fa fa-star-o"></i>';
//                 star5.classList.add('starColor');
//                 break;

//             case starsCE >= 4.5:
//                 star1 = document.createElement('i');
//                 star1.innerHTML = '<i class="fas fa-star"></i>';
//                 star1.classList.add('starColor');

//                 star2 = document.createElement('i');
//                 star2.innerHTML = '<i class="fas fa-star"></i>';
//                 star2.classList.add('starColor');

//                 star3 = document.createElement('i');
//                 star3.innerHTML = '<i class="fas fa-star"></i>';
//                 star3.classList.add('starColor');

//                 star4 = document.createElement('i');
//                 star4.innerHTML = '<i class="fas fa-star"></i>';
//                 star4.classList.add('starColor');

//                 star5 = document.createElement('i');
//                 star5.innerHTML = '<i class="fas fa-star"></i>';
//                 star5.classList.add('starColor');
//                 break;

//             case starsCE >= 5:
//                 star1 = document.createElement('i');
//                 star1.innerHTML = '<i class="fas fa-star"></i>';
//                 star1.classList.add('starColor');

//                 star2 = document.createElement('i');
//                 star2.innerHTML = '<i class="fas fa-star"></i>';
//                 star2.classList.add('starColor');

//                 star3 = document.createElement('i');
//                 star3.innerHTML = '<i class="fas fa-star"></i>';
//                 star3.classList.add('starColor');

//                 star4 = document.createElement('i');
//                 star4.innerHTML = '<i class="fas fa-star"></i>';
//                 star4.classList.add('starColor');

//                 star5 = document.createElement('i');
//                 star5.innerHTML = '<i class="fas fa-star"></i>';
//                 star5.classList.add('starColor');
//                 break;

//             default:
//                 break;
//         }

//         boxCE.appendChild(wrapperCE);

//         wrapperCE.appendChild(position);
//         wrapperCE.appendChild(photoCE);
//         wrapperCE.appendChild(nameCE);
//         wrapperCE.appendChild(provinciaCE);
//         wrapperCE.appendChild(starsRate);

//         starsRate.appendChild(star1);
//         starsRate.appendChild(star2);
//         starsRate.appendChild(star3);
//         starsRate.appendChild(star4);
//         starsRate.appendChild(star5);

//     };
// };

mostrarTopGeneral();

