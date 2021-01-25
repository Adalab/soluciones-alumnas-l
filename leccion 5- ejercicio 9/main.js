 "use strict";

const teacherList = document.querySelector(".teachers");

function changeColor (event) {
  const clickedElement = event.target;
  const liElement = clickedElement.closest(".teacher");
  liElement.classList.toggle ("teacher--selected");

  liElement.querySelector(".favorite").innerHTML = "Quitar";
 //teacherSelected.classList.toggle ("teacher--selected");
}

teacherList.addEventListener ('click', changeColor);
