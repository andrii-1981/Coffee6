(function () {

    const slides = [
        `<div class ="testimonials__slide">
            <img src="img/testimonials/client-01.png" alt="Client 01">
        </div>`,
        `<div class ="testimonials__slide">
            <img src="img/testimonials/client-02.png" alt="Client 02">
        </div>`,
        `<div class ="testimonials__slide">
            <img src="img/testimonials/client-03.png" alt="Client 03">
        </div>`,
        `<div class ="testimonials__slide">
            <img src="img/testimonials/client-04.png" alt="Client 04">
        </div>`;
    ]
    
    let currentSlideIdx  = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.testimonials-carousel');
        slideContainer.innerHTML = slides [currentSlideIdx];

        if (window.innerWidth > 600) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides [secondSlideIdx];
            if (window.secondSlideIdx.innerWidth > 900) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides [thirdSlideIdx];
            }
        }
    }

    function prev () {
        currentSlideIdx = currentSlideIdx -1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        
        renderCarousel ();
    }
    function next () {
        currentSlideIdx = currentSlideIdx + 1 <= slides.length ? 0 : currentSlideIdx + 1;
        
        renderCarousel ();
    }
    setInterval (next, 3000);

    const prevButton = document.querySelector ('.testimonials-carousel__btn-prev');
    prevButton.addEventListener ('click', prev);

    const nextButton = document.querySelector ('.testimonials-carousel__btn-next');
    nextButton.addEventListener ('click', next);

    renderCarousel ();

    window.addEventListener ('resize', renderCarousel);

})();
