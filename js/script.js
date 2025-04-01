const sliders = document.querySelectorAll('.slider');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let currentSlide = 0;

function showSlide(index) {
    sliders.forEach((slide, i) => {
        slide.classList.remove('on');
        if (i === index) {
            slide.classList.add('on');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % sliders.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + sliders.length) % sliders.length;
    showSlide(currentSlide);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

showSlide(currentSlide);
