let showSideBar = document.getElementsByClassName("side-bar-background")[0];
let burger = document.getElementsByClassName("nav-mini-left")[0];

let close = document.querySelector(".close");

burger.addEventListener("click", function () {
  showSideBar.style.display = "block";
});
close.addEventListener("click", function () {
  showSideBar.style.display = "none";
});

let box2 = document.querySelector(".nav-box2");
let box2PopOver = document.querySelector(".nav-box2-popover-background");
let popover = document.querySelector(".nav-box2-popover");
box2.addEventListener("click", function () {
  box2PopOver.style.display = "block";
});
box2PopOver.addEventListener("click", function () {
  box2PopOver.style.display = "none";
});

let box3 = document.querySelector(".nav-box3");
let box3dropdown = document.querySelector(".nav-box3-dropdown");

box3.addEventListener("click", function () {
  if (box3dropdown.style.display === "none") {
    box3dropdown.style.display = "block";
  } else {
    box3dropdown.style.display = "none";
  }
});



  let button1 = document.querySelector("#btn1");
let button2 = document.querySelector("#btn2");

let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');

button1.addEventListener('click', function(){
  img2.style.display = "block"
})
button2.addEventListener('click', function(){
  img2.style.display = "block"
})


