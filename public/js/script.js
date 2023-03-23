var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = $(".mySlides");
  let dots = $(".dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  $(".mySlides").attr("style", "display:none")
  
  $(".dot").replaceWith(" active", "");
 
  slides[slideIndex-1].style.display = "block";
  
  
}




