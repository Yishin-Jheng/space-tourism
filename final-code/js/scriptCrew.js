"use strict";

///////////////////////////////////////
//   Slider component - horizontal   //
///////////////////////////////////////

const sliderComponent = function () {
  //////////  Variables  //////////
  const slides = document.querySelectorAll(".crew__slide");
  const imgs = document.querySelectorAll(".crew__img");
  const dotContainer = document.querySelector(".crew__dots");
  let curSlide = 0;

  const activateDot = function (slide) {
    // remove active class from all dots
    document
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("dot--active"));

    // add active class on dot of current slide
    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("dot--active");
  };

  const goToSlide = function (curSlide) {
    slides.forEach(
      (slide, i) =>
        (slide.style.transform = `translateX(${(i - curSlide) * 100}%)`)
    );
    imgs.forEach(
      (img, i) => (img.style.transform = `translateX(${(i - curSlide) * 100}%)`)
    );

    activateDot(curSlide);
  };

  const nextSlide = function () {
    if (curSlide < slides.length - 1) {
      curSlide++;
    } else {
      curSlide = 0;
    }
    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide > 0) {
      curSlide--;
    } else {
      curSlide = slides.length - 1;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    // make slides side by side
    goToSlide(0);
  };

  init();

  //////////  Event handlers  //////////
  // by keyboard
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    else if (e.key === "ArrowRight") nextSlide();
  });

  // by dot
  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dot")) {
      // destructuring
      const { slide } = e.target.dataset;
      goToSlide(slide);
    }
  });
};

sliderComponent();
