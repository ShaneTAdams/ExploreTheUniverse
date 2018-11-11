var myslideshow = 1;
showSlides(myslideshow);


function plusSlides(n) {
  showSlides(myslideshow += n);
}

function currentSlide(n) {
  showSlides(myslideshow = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {myslideshow = 1}
  if (n < 1) {myslideshow = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[myslideshow-1].style.display = "block";
  dots[myslideshow-1].className += " active";
}
