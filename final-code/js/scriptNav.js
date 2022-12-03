"use strict";

///////////////////////////////////////
//         Navigation Button         //
///////////////////////////////////////

const NavBtn = function () {
  //////////  Variables  //////////
  const btn = document.querySelector(".nav__button");
  const btnUp = document.querySelector(".nav__button__icon-1");
  const btnMid = document.querySelector(".nav__button__icon-2");
  const btnDown = document.querySelector(".nav__button__icon-3");
  const sideBar = document.querySelector(".nav__links");

  //////////  Event handlers  //////////
  btn.addEventListener("click", function (e) {
    btnUp.classList.toggle("nav__button__icon-1--active");
    btnMid.classList.toggle("nav__button__icon-2--active");
    btnDown.classList.toggle("nav__button__icon-3--active");
    sideBar.classList.toggle("nav__links--close");
    sideBar.classList.toggle("nav__links--open");
  });
};

NavBtn();
