/*
1 Arrancar la pagina
    1 Comprobar si hay datos en localStorage
            1 si= cojo los datos del localStorage
            1 no= Coger datos del API
    1 Guardar los datos en localStorage 
    1 Pintar paletas
    1 Escuchar eventos en las paletas

1 Pinchar en paleta(evento)
    1 Des / marcar como favorita en los datos js
    1 Pintar Paletas
    1 Escuchar eventos en las paletas

1 Filtrar
    1 Coger valor del input y filtrar las paletas
    1 Pintar paletas
    1 Escuchar eventos en las paletas

EVENTOS QUE ARRANCAN EL FLUJO Y QUE MODIFICAN DATOS (no pintan)
PINTAR Y ESCUCHAR (no modifican datos)
*/
'use strict';

//CONSTANTES Y VARIABLES

const palettesContainer = document.querySelector('.js-palettes-container');
let palettes = [];


//API
function getDataFromApi() {
fetch('https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json')
  .then(response => response.json())
  .then(data => {
    palettes = data.palettes;
    //console.log(palettes);
    saveInLocalStorage();
    }
)}

// SAVE LOCAL STORAGE

function saveInLocalStorage() {
  const stringPalettes = JSON.stringify(palettes);
  //console.log(stringPalettes);
  localStorage.setItem('palettes', stringPalettes);
}

// GET FROM LOCAL STORAGE

function getFromLocalStorage() {
  const localPalettes = JSON.parse(localStorage.getItem('palettes'));
  if (localPalettes === null){
    getDataFromApi();
    renderPalettes();
  }
  else {
    palettes = localPalettes;
    console.log(palettes);
    renderPalettes();
  }
}

getFromLocalStorage();

//PINTAR COSAS

function renderPalettes(){
  let htmlCode = '';
  for(const paletter of palettes){
    htmlCode += '<li class="palette">';
    htmlCode += `<h2 class="palette__title">${paletter.name}</h2>`
    htmlCode += `<div class="palette__colors" title="${paletter.from}">`;
    for (const color of paletter.colors){
      htmlCode += `<div class="palette__color" style="background-color: #${color}"></div>`
    }
    htmlCode += '</div>';
    htmlCode += '</li>';
  }
  palettesContainer.innerHTML = htmlCode;
};

//AÑADIR CLASE SELECCIONADA

const paletteElements = document.querySelectorAll('.palette');

function handleFavorite(ev) {
  const targetPalette = ev.currentTarget;
  targetPalette.classList.toggle('palette--favorite');
  console.log("manca aprende a hacer código o algos");
}

function listenPalettes() {
  for(const paletteElement of paletteElements){
  paletteElement.addEventListener("click", handleFavorite);
  }
};

listenPalettes()
//# sourceMappingURL=main.js.map
