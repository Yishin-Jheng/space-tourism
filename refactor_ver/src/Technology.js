import React, { useEffect, useState } from "react";

const techObj = [
  {
    index: 1,
    img1: "./image/technology/image-launch-vehicle-portrait.jpg",
    img2: "./image/technology/image-launch-vehicle-landscape.jpg",
    name: "Launch vehicle",
    text: `A launch vehicle or carrier rocket is a rocket-propelled vehicle
    used to carry a payload from Earth's surface to space, usually
    to Earth orbit or beyond. Our WEB-X carrier rocket is the most
    powerful in operation. Standing 150 metres tall, it's quite an
    awe-inspiring sight on the launch pad!`,
  },
  {
    index: 2,
    img1: "./image/technology/image-spaceport-portrait.jpg",
    img2: "./image/technology/image-spaceport-landscape.jpg",
    name: "Spaceport",
    text: `A spaceport or cosmodrome is a site for launching (or receiving)
    spacecraft, by analogy to the seaport for ships or airport for
    aircraft. Based in the famous Cape Canaveral, our spaceport is
    ideally situated to take advantage of the Earth’s rotation for
    launch.`,
  },
  {
    index: 3,
    img1: "./image/technology/image-space-capsule-portrait.jpg",
    img2: "./image/technology/image-space-capsule-landscape.jpg",
    name: "Space capsule",
    text: `A space capsule is an often-crewed spacecraft that uses a
    blunt-body reentry capsule to reenter the Earth's atmosphere
    without wings. Our capsule is where you'll spend your time
    during the flight. It includes a space gym, cinema, and plenty
    of other activities to keep you entertained.`,
  },
];

function Technology() {
  const [slideState, setSlideState] = useState(1);

  useEffect(() => {
    // by keydown
    const nextSlide = function () {
      if (slideState < techObj.length) {
        setSlideState(slideState + 1);
      } else {
        setSlideState(1);
      }
    };

    const prevSlide = function () {
      if (slideState > 1) {
        setSlideState(slideState - 1);
      } else {
        setSlideState(techObj.length);
      }
    };

    const handleKeyDown = function (e) {
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") prevSlide();
      else if (e.key === "ArrowDown" || e.key === "ArrowRight") nextSlide();
    };

    const addListener = function () {
      document.addEventListener("keydown", handleKeyDown);
    };

    const cleanUpListener = function () {
      document.removeEventListener("keydown", handleKeyDown);
    };

    addListener();
    return cleanUpListener;
  }, [slideState]);

  return (
    <main className="technology grid-container">
      <div className="technology__content">
        <div className="sub-title">
          <span className="heading-5 sub-title__num">03</span>
          <span className="heading-5 sub-title__text">Space launch 101</span>
        </div>

        <div className="technology__container">
          <div className="technology__tabs heading-4">
            {techObj.map((tech) => {
              return (
                <div
                  key={tech.index}
                  className={`tab ${
                    slideState === tech.index ? "tab--active" : ""
                  }`}
                  onClick={() => setSlideState(tech.index)}
                >
                  <span>{tech.index}</span>
                </div>
              );
            })}
          </div>

          <div className="technology__slider">
            {techObj.map((tech) => {
              return (
                <div
                  key={tech.index}
                  className="technology__slide"
                  style={{
                    transform: `translateY(${
                      (tech.index - slideState) * 100 - 1
                    }%)`,
                  }}
                >
                  <div className="nav-text">The terminology...</div>
                  <h2 className="heading-3">{tech.name}</h2>
                  <span className="body-text">{tech.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="technology__imgs">
        {techObj.map((tech) => {
          return (
            <picture
              key={tech.index}
              className="technology__img"
              style={{
                transform: `translateY(${
                  (tech.index - slideState) * 100 - 1
                }%)`,
              }}
            >
              <source srcSet={tech.img2} media="(max-width: 62.5em)" />
              <img src={tech.img1} alt={tech.name} />
            </picture>
          );
        })}
      </div>
    </main>
  );
}

export default Technology;
