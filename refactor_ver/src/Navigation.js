import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navArr = [
  { index: "00", name: "home" },
  { index: "01", name: "destination" },
  { index: "02", name: "crew" },
  { index: "03", name: "technology" },
];

const btnArr = [1, 2, 3];

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation().pathname.slice(1);

  return (
    <nav className="nav nav-text">
      <img src="./logo.svg" alt="icon of space toursim" className="nav__icon" />
      <div className="nav__decoline">&nbsp;</div>

      <div
        className="nav__button"
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
      >
        {btnArr.map((num) => {
          return (
            <span
              key={num}
              className={`nav__button__icon-${num} ${
                isNavOpen ? `nav__button__icon-${num}--active` : ""
              }`}
            >
              &nbsp;
            </span>
          );
        })}
      </div>

      <div className={`nav__links nav__links--${isNavOpen ? "open" : "close"}`}>
        {navArr.map((page) => {
          let navPage;
          if (page.name === "home") {
            navPage = "";
          } else {
            navPage = page.name;
          }
          return (
            <Link key={page.name} to={`/${navPage}`}>
              <div
                className={`nav__link ${
                  location === navPage ? "nav__link--active" : ""
                }`}
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                }}
              >
                <b className="nav__link__num">{page.index}</b>&nbsp;&nbsp;
                {page.name}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navigation;
