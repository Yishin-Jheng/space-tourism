"use strict";

///////////////////////////////////////
//       Destination tabbed          //
///////////////////////////////////////

//////////  Variables  //////////
const tabsContainer = document.querySelector(".sub-nav");
const tabs = document.querySelectorAll(".sub-nav__link");
const planetImgs = document.querySelectorAll(".planet-img");
const tabsContent = document.querySelectorAll(".destination__text");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".sub-nav__link");

  if (!clicked) return;
  console.log(clicked);

  // remove active class
  tabs.forEach((tab) => tab.classList.remove("sub-nav__link--active"));
  tabsContent.forEach((content) =>
    content.classList.remove("destination__text--active")
  );
  planetImgs.forEach((img) => img.classList.remove("planet-img--active"));

  // active tab
  clicked.classList.add("sub-nav__link--active");

  // active content area
  document
    .querySelector(`.destination__text--${clicked.dataset.tab}`)
    .classList.add("destination__text--active");
  document
    .querySelector(`.planet-img--${clicked.dataset.tab}`)
    .classList.add("planet-img--active");
});
