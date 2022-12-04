"use strict";

///////////////////////////////////////
//    Slider component - vertical    //
///////////////////////////////////////

const sliderComponent = function () {
  //////////  Variables  //////////
  const slides = document.querySelectorAll(".technology__slide");
  const imgs = document.querySelectorAll(".technology__img");
  const tabContainer = document.querySelector(".technology__tabs");
  let curSlide = 0;

  const activateTab = function (slide) {
    // remove active class from all tabs
    document
      .querySelectorAll(".tab")
      .forEach((tab) => tab.classList.remove("tab--active"));

    // add active class on tab of current slide
    document
      .querySelector(`.tab[data-slide="${slide}"]`)
      .classList.add("tab--active");
  };

  const goToSlide = function (curSlide) {
    slides.forEach(
      (slide, i) =>
        (slide.style.transform = `translateY(${(i - curSlide) * 100 - 1}%)`)
    );
    imgs.forEach(
      (img, i) =>
        (img.style.transform = `translateY(${(i - curSlide) * 100 - 1}%)`)
    );

    activateTab(curSlide);
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
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") prevSlide();
    else if (e.key === "ArrowDown" || e.key === "ArrowRight") nextSlide();
  });

  // by tab
  tabContainer.addEventListener("click", function (e) {
    const clicked = e.target.closest(".tab");
    if (clicked) {
      const { slide } = clicked.dataset;
      goToSlide(slide);
    }
  });
};

sliderComponent();
