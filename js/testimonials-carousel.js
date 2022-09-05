(function () {
  const slides = [
    `<div class ="testimonials__slide">
            <img src="img/testimonials/client-01.png" alt="Client 01">
            <h3 class="name__client">Josh Mendel</h3>
            <p class="testimonials__text">“I really love to drink coffee in the morning, but I hate making it.
            Therefore, I decided to
            rent a coffee machine from this company. I am very pleased with the service - everything was
            done quickly, they brought and set up the coffee machine.”</p>
          <p class="text__data">December 15, 2020</p>
        </div>`,
    `<div class ="testimonials__slide">
            <img src="img/testimonials/client-02.png" alt="Client 02">
            <h3 class="name__client">Jessica Malacks</h3>
            <p class="testimonials__text">“We have renovated the office kitchen and decided to delight our employees
              with automatic
              coffee machines. However, such equipment is very expensive. So, we simply rented coffee
              machines from this company and were completely satisfied.”</p>
            <p class="text__data">February 10, 2021</p>
        </div>`,
    `<div class ="testimonials__slide">
            <img src="img/testimonials/client-03.png" alt="Client 03">
            <h3 class="name__client">Daniella Williamson</h3>
            <p class="testimonials__text">“When I opened a coffee shop, I couldn't find an affordable coffee machine.
              Finally, I found
              this company and I am grateful for their excellent advice. They helped with the choice of
              the coffee machine and regularly deliver coffee beans and cups." </p>
            <p class="text__data">March 04, 2021</p>
        </div>`,
    `<div class ="testimonials__slide">
            <img src="img/testimonials/client-04.png" alt="Client 04">
            <h3 class="name__client">Dean Steinberg</h3>
            <p class="testimonials__text">“We have been cooperating with this company for 2 years already, and during
            this time, not a
            single problem situation has arisen. The service is fast, the coffee is delivered without
            delay, the prices for coffee machine rental are very low.”</p>
            <p class="text__data">March 22, 2021</p>
        </div>`,
  ];

  let currentSlideIdx = 0;

  function renderCarousel() {
    const slideContainer = document.querySelector(
      ".testimonials-carousel__slides"
    );
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.innerWidth > 600) {
      const secondSlideIdx =
        currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
      slideContainer.innerHTML += slides[secondSlideIdx];
      if (window.innerWidth > 900) {
        const thirdSlideIdx =
          secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
        slideContainer.innerHTML += slides[thirdSlideIdx];
      }
    }
  }

  function prev() {
    currentSlideIdx =
      currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderCarousel();
  }

  function next() {
    currentSlideIdx =
      currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderCarousel();
  }

  //setInterval(next, 3000);

  const prevButton = document.querySelector(".testimonials-carousel__btn-prev");
  prevButton.addEventListener("click", prev);

  const nextButton = document.querySelector(".testimonials-carousel__btn-next");
  nextButton.addEventListener("click", next);

  renderCarousel();

  window.addEventListener("resize", renderCarousel);
})();
