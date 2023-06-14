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
