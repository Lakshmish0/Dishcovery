export function initializeSlider() {
    const slider = document.querySelector('.dish-of-the-day-slider');
    if (!slider) return; // Exit if slider not found

    const slides = slider.querySelectorAll('.splide__slide');
    if (slides.length === 0) return; // Exit if no slides

    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Style buttons
    prevButton.innerHTML = '&lt;';
    nextButton.innerHTML = '&gt;';
    prevButton.classList.add('slider-btn', 'prev-btn');
    nextButton.classList.add('slider-btn', 'next-btn');

    // Clear any existing buttons first
    const existingPrevBtn = slider.querySelector('.prev-btn');
    const existingNextBtn = slider.querySelector('.next-btn');
    if (existingPrevBtn) existingPrevBtn.remove();
    if (existingNextBtn) existingNextBtn.remove();

    // Append buttons to slider
    slider.appendChild(prevButton);
    slider.appendChild(nextButton);

    // Hide all slides except the first
    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? 'block' : 'none';
    });

    // Next slide function
    const nextSlide = () => {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].style.display = 'block';
    };

    // Previous slide function
    const prevSlide = () => {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slides[currentSlide].style.display = 'block';
    };

    // Add event listeners
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Optional: Auto slide
    const autoSlideInterval = setInterval(nextSlide, 3000);

    // Return cleanup function
    return () => {
        clearInterval(autoSlideInterval);
        prevButton.removeEventListener('click', prevSlide);
        nextButton.removeEventListener('click', nextSlide);
    };
}
