import React, { useEffect, useState } from "react";

const crewObj = [
  {
    index: 1,
    img: "./image/crew/image-douglas-hurley.png",
    title: "Commander",
    name: "Douglas Hurley",
    text: `Douglas Gerald Hurley is an American engineer, former Marine Corps
    pilot and former NASA astronaut. He launched into space for the
    third time as commander of Crew Dragon Demo-2.`,
  },
  {
    index: 2,
    img: "./image/crew/image-mark-shuttleworth.png",
    title: "Mission Specialist",
    name: "Mark Shuttleworth",
    text: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the
    company behind the Linux-based Ubuntu operating system.
    Shuttleworth became the first South African to travel to space as
    a space tourist.`,
  },
  {
    index: 3,
    img: "./image/crew/image-victor-glover.png",
    title: "Pilot",
    name: "Victor Glover",
    text: `Pilot on the first operational flight of the SpaceX Crew Dragon to
    the International Space Station. Glover is a commander in the U.S.
    Navy where he pilots an F/A-18.He was a crew member of Expedition
    64, and served as a station systems flight engineer.`,
  },
  {
    index: 4,
    img: "./image/crew/image-anousheh-ansari.png",
    title: "Flight Engineer",
    name: "Anousheh Ansari",
    text: `Anousheh Ansari is an Iranian American engineer and co-founder of
    Prodea Systems. Ansari was the fourth self-funded space tourist,
    the first self-funded woman to fly to the ISS, and the first
    Iranian in space.`,
  },
];

function Crew() {
  const [slideState, setSlideState] = useState(1);

  const nextSlide = function () {
    if (slideState < crewObj.length) {
      setSlideState(slideState + 1);
    } else {
      setSlideState(1);
    }
  };
  const prevSlide = function () {
    if (slideState > 1) {
      setSlideState(slideState - 1);
    } else {
      setSlideState(crewObj.length);
    }
  };
  const handleKeyDown = function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    else if (e.key === "ArrowRight") nextSlide();
  };
  const addListener = function () {
    document.addEventListener("keydown", handleKeyDown);
  };

  useEffect(() => {
    const cleanUpListener = function () {
      document.removeEventListener("keydown", handleKeyDown);
    };

    addListener();
    return cleanUpListener;
  }, [slideState]);

  return (
    <main className="crew grid-container">
      <div className="crew__content">
        <div className="sub-title">
          <span className="heading-5 sub-title__num">02</span>
          <span className="heading-5 sub-title__text">Meet your crew</span>
        </div>

        <div className="crew__slider">
          {crewObj.map((crew) => {
            return (
              <div
                key={crew.index}
                className={`crew__slide crew__slide--${crew.index}`}
                style={{
                  transform: `translateX(${(crew.index - slideState) * 100}%)`,
                }}
              >
                <h2 className="heading-4">{crew.title}</h2>
                <h3 className="heading-3">{crew.name}</h3>
                <span className="body-text">{crew.text}</span>
              </div>
            );
          })}
        </div>

        <div className="crew__dots">
          {crewObj.map((crew) => {
            return (
              <div
                key={crew.index}
                className={`dot ${
                  slideState === crew.index ? "dot--active" : ""
                }`}
                onClick={() => setSlideState(crew.index)}
              >
                &nbsp;
              </div>
            );
          })}
        </div>
      </div>

      <div className="crew__imgs">
        {crewObj.map((crew) => {
          return (
            <figure
              key={crew.index}
              className={`crew__img crew__img--${crew.index}`}
              style={{
                transform: `translateX(${(crew.index - slideState) * 100}%)`,
              }}
            >
              <img src={crew.img} alt={crew.name} />
            </figure>
          );
        })}
      </div>
    </main>
  );
}

export default Crew;
