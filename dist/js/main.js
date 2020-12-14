

const menu = document.querySelector('.navbar--open');
const btn = document.querySelector('.menu-btn');

btn.addEventListener('click', function(event) {
  menu.classList.toggle('navbar--open');
})



var image = document.getElementsByClassName('parallax');
new simpleParallax(image);




$(document).ready(function(){
  $(".camera-btn").click(function(){
    $(".copyright--toggle").toggle();
  });
});



$(document).ready(function(){
  $(".show").click(function(){
    $(".container--toggle").show();
  });
  $(".hide").click(function(){
    $(".container--toggle").hide();
  });
});

