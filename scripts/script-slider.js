document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const sliderContainer = document.querySelector('.slider-product');
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('dots');
  
    // Create dots dynamically based on the number of slides
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dotsContainer.appendChild(dot);
    }
  
    sliderContainer.appendChild(dotsContainer);
    const dots = document.querySelectorAll('.dot');
  
    // Debugging: Log the number of slides and dots
    console.log("Number of slides:", slides.length);
    console.log("Number of dots:", dots.length);
  
    // Show the first slide when the page loads
    showSlide(currentSlide);
  
    // Switch to the next slide when clicking on a dot
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
      });
    });
  
    function showSlide(index) {
      // Hide all slides
      slides.forEach(slide => {
        slide.style.display = 'none';
      });
  
      // Hide all dots
      dots.forEach(dot => {
        dot.classList.remove('active');
      });
  
      // Show the selected slide if it exists
      if (slides[index]) {
        slides[index].style.display = 'block';
        // Set the active class for the selected dot
        dots[index].classList.add('active');
        // Update the currentSlide variable
        currentSlide = index;
      } else {
        console.error(`Slide at index ${index} not found.`);
      }
    }
  });
  