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

let box9 = document.querySelector('.nav-mini-mid-box9');
let box9dropdown = document.querySelector('.nav-box9-dropdown-background');
let box9dropdownbox = document.querySelector('.nav-box9-dropdown');

box9.addEventListener('mouseenter', function(){
  box9dropdown.style.display = "block";
})
box9.addEventListener('mouseleave', function(){
  box9dropdown.style.display = "none";
})
box9dropdownbox.addEventListener('mouseenter', function(){
  box9dropdown.style.display = "block";
})
box9dropdownbox.addEventListener('mouseleave', function(){
  box9dropdown.style.display = "none";
})

let box6 = document.querySelector('.nav-box6');
let box6dropdown = document.querySelector('.nav-box6-dropdown-background');
let box6dropdownbox = document.querySelector('.nav-box6-dropdown');

box6.addEventListener('mouseenter', function(){
  box6dropdown.style.display = "block";
})
box6.addEventListener('mouseleave', function(){
  box6dropdown.style.display = "none";
})
box6dropdownbox.addEventListener('mouseenter', function(){
  box6dropdown.style.display = "block";
})
box6dropdownbox.addEventListener('mouseleave', function(){
  box6dropdown.style.display = "none";
})



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



