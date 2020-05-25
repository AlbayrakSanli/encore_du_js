var element = document.querySelectorAll("footer")[0];
element.addEventListener("click", myFunction);
var i = 0;

function myFunction() {
  i += 1;
  console.log("clique numéro : " + i);
}

var navbarHeader = document.getElementById("navbarHeader");
navbarHeader.addEventListener("click", loseClass);
console.log(navbarHeader);

function loseClass() {
  document.getElementById("navbarHeader").classList.toggle("collapse");
  console.log("c'est bon, j'ai supprimer");
}

var editCard = document.querySelectorAll("div.col-md-4 > div.box-shadow > div.card-body > div.d-flex > div.btn-group > button.btn-outline-secondary");
editCard[0].addEventListener("click", textRed);

function textRed(){
  var changeText = document.querySelectorAll("div.col-md-4 > div.box-shadow > div.card-body > p");
  changeText[0].style.color = "red";
}

editCard[1].addEventListener("click", textGreen);

function textGreen(){
  var changeText = document.querySelectorAll("div.col-md-4 > div.box-shadow > div.card-body > p");

  if (changeText[1].style.color === 'green'){
    changeText[1].style.color = '' ;
  }else{
    changeText[1].style.color = "green";
  }
}

var disableLink = document.querySelector("link");
var doubleClick = document.querySelector(".navbar");
doubleClick.addEventListener("click", doubleClickFct);
var i = 0;

function doubleClickFct() {
  i += 1;
  if(i % 2 === 0 && disableLink.disabled === false){
    disableLink.disabled = true;
  }else if(i % 2 === 0 && disableLink.disabled === true){
    disableLink.disabled = false;
  }
}

var viewCard = document.querySelectorAll("div.col-md-4 > div.box-shadow > div.card-body > div.d-flex > div.btn-group > button.btn-success");
for(let i =0; i < viewCard.length; i++){
  viewCard[i].addEventListener("click", changeCardAgain);


function changeCardAgain(){
  var changeText = document.querySelectorAll("div.col-md-4 > div.box-shadow");
  changeText[i].children[1].children[0].textContent = "";
  changeText[i].children[0].style.height = '80%';
  changeText[i].children[0].style.width = '80%';
}
}
