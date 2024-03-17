document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const sliderContainer = document.querySelector('.slider-product');
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('dots');
  

    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dotsContainer.appendChild(dot);
    }
  
    sliderContainer.appendChild(dotsContainer);
    const dots = document.querySelectorAll('.dot');
  

    showSlide(currentSlide);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
      });
    });
  
    function showSlide(index) {

      slides.forEach(slide => {
        slide.style.display = 'none';
      });

      dots.forEach(dot => {
        dot.classList.remove('active');
      });
  
 
      if (slides[index]) {
        slides[index].style.display = 'block';

        dots[index].classList.add('active');

        currentSlide = index;
      } else {
        console.error(`Slide at index ${index} not found.`);
      }
    }
  });
  