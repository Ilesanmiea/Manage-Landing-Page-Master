var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every # seconds
}


var nav = document.getElementById("myNav");
var menu = document.getElementById('hamburger');
var close = document.getElementById("closeIcon");

function myNav(){
nav.style.display ="flex";
close.style.display ="block";
menu.style.display="none"

}

function closeNav(){
    nav.style.display ="none";
    menu.style.display ="block";
}
