/* 'use strict';

const ulElement = document.querySelector('.js-palettes-container');

const liOne = document.createElement('li');
const titleOne = document.createElement('h3');
const titleOneText = document.createTextNode('Space Ship');
titleOne.appendChild(titleOneText);
liOne.appendChild(titleOne);
const divOne = document.createElement('div');

fetch("https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palette.json")
    .then(response => response.json())
    .then(data => {
        
    } );

ulElement.appendChild(liOne);
 */


//.createElement para crear el LI
//.createElement para H3
//.createTextNode para texto del H3
// .appendChild para meter texto en H3
// .appendChild para meter H3 en LI
// .createElement para crear el "cajón/div"
// .createElement para crear los 5 pequeños
// crear array y push los 5 div dentro
// .map (.appenchild) = > meter array dentro del cajón


// DIV PADRE == ARRAY
// DIV HIJOS == elementos del array



// fetch => recuperar paleta del servior y crear array que llamamos PALETA


/*  function aplicarStyle() {
     for ( let color of paletas) {        
    .style.backGroundColor = color
}
} */

// divPadre.map()