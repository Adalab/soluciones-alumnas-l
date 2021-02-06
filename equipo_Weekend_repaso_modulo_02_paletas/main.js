"use strict";

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
const palettesContainer = document.querySelector;
let palettes = [];

//API

function getDataFromApi() {
  fetch(
    "https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json"
  )
    .then((response) => response.json())
    .then((data) => {
      palettes = data.palettes;
      setInLocalStorage();
    });
}
// local storage

function setInLocalStorage() {
  const stringPalettes = JSON.stringify(palettes);
  localStorage.setItem("palettes", stringPalettes);
}

function getFromLocalStorage() {
  const localStoragePalettes = localStorage.getItem("palettes");
  if (localStoragePalettes === null) {
    getDataFromApi();
  } else {
    const arrayPalettes = JSON.parse(localStoragePalettes);
    palettes = arrayPalettes;
    paintPalettes();
  }
}

//render

function paintPalettes() {
  let htmlCode = "";
  for (const palette of palettes){
  }
  palettesContainer.innerHTML = htmlCode;
}

//start app

getFromLocalStorage();
