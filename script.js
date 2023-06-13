let showSideBar = document.getElementsByClassName("side-bar-background")[0];
let burger = document.getElementsByClassName("nav-mini-left")[0];

let close = document.querySelector(".close");

burger.addEventListener('click', function(){
  showSideBar.style.display = "block";
});
close.addEventListener('click', function(){
   showSideBar.style.display = "none";
});



  let box2 = document.querySelector('.nav-box2');
  let showPopOver = document.querySelector('.nav-box2-popover-background');
  let popover =document.querySelector('.nav-box2-popover')
  box2.addEventListener('click', function(){
    showPopOver.style.display="block"
  })
  showPopOver.addEventListener('click', function(){
    showPopOver.style.display= "none"
  })
  
  

