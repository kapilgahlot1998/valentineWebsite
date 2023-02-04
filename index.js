let button = document.getElementsByClassName("center-button");
let leftBox = document.getElementsByClassName("left-box");
let centerBox = document.getElementsByClassName("center-box");
let shayri = document.getElementsByClassName("shyari");
let card = document.getElementsByClassName("card");

button[0].addEventListener("click", () => {
  leftBox[0].classList.add("move");
});

function hide() {
  button[0].style.visibility = "hidden";
  shayri[0].style.visibility = "hidden";
  setTimeout(()=> {
    card[0].style.visibility = "visible"
  }, 1000);
  
}
