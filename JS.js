let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const carousels = document.querySelectorAll('.carousel-images');
    carousels.forEach((carousel) => {
        const slides = carousel.querySelectorAll('img');
        if (n >= slides.length) {slideIndex = 0} 
        if (n < 0) {slideIndex = slides.length - 1} 
        carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
    window.addEventListener('scroll', function() {
        const footer = document.querySelector('footer');
        const body = document.body;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        if (scrollPosition >= documentHeight) {
            body.classList.add('scrolled');
        } else {
            body.classList.remove('scrolled');
        }
}
