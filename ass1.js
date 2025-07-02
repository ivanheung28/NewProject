const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelectorAll('.prev');
const nextButton = document.querySelectorAll('.next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

prevButton.forEach(button => {
    button.addEventListener('click', () => {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });
});

nextButton.forEach(button => {
    button.addEventListener('click', () => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });
});


// Initialize the first slide
showSlide(currentSlide);

