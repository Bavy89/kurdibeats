const slideshow = document.querySelector('.slideshow');
const slides = slideshow.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
    slides[currentSlide].classList.add('active');
    setTimeout(hideSlide, 5000); // Change slide every 5 seconds
}

function hideSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
}

showSlide();
