`use strict`;

const paragraph = document.querySelector (".text");


function handleScroll() {
/*   console.log(window.scrollY);*/
   if( window.scrollY > 250 ) {
    paragraph.classList.add('bkGreen');
    paragraph.classList.remove("text");
  }
  else {
    paragraph.classList.remove('bkGreen');
    paragraph.classList.add("text");
  }
}




window.addEventListener("scroll", handleScroll);

//paragraph.classList.add('bkGreen');
/*

function handleScroll(event){
if (window.scrollY > 250){


}
}


paragraph.addEventListener(`scroll`,handleScroll);
*/