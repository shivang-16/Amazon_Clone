let showSideBar = document.getElementsByClassName("side-bar-background")[0];
let burger = document.getElementsByClassName("nav-mini-left")[0];

let close = document.querySelector(".close");

burger.addEventListener('click', function(){
  showSideBar.style.display = "block";
});
close.addEventListener('click', function(){
   showSideBar.style.display = "none";
});

let box2 = document.getElementsByClassName('nav-box2')[0];
let showPopOver = document.getElementsByClassName('nav-box2-popover-background')[0];

box2.addEventListener('click', function(){
  showPopOver.style.display = "block";
})