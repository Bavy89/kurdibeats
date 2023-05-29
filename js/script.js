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


// Smooth scrolling function
function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var ease = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, ease);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    // Easing function
    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  
  // Add a class to the navigation menu when scrolling
  var nav = document.querySelector("nav");
  var navLinks = document.querySelectorAll("nav a");
  
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 0) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
  
  // Smooth scroll when anchor tags are clicked
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var target = this.getAttribute("href");
      var duration = 1000; // Adjust this value to control the scroll speed
  
      // Check if the target is the top of the page
      if (target === "#") {
        smoothScroll("body", duration);
      } else {
        smoothScroll(target, duration);
      }
    });
  });
  
