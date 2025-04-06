const carousel = document.getElementById('carousel');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;
let currentSlide = 0;

function updateCarousel() {
  const offset = -currentSlide * (220);
  carousel.style.transform = `translateX(${offset}px)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarousel();
  }
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateCarousel();
  });
});