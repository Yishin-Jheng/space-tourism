import React, { useState } from "react";

const destinationObj = [
  {
    name: "moon",
    text: `See our planet as you’ve never seen it before. A perfect relaxing
    trip away to help regain perspective and come back refreshed. While
    you’re there, take in some history by visiting the Luna 2 and Apollo
    11 landing sites.`,
    distance: "384,400 km",
    time: "3 days",
  },
  {
    name: "mars",
    text: `Don’t forget to pack your hiking boots. You’ll need them to tackle
    Olympus Mons, the tallest planetary mountain in our solar system.
    It’s two and a half times the size of Everest!`,
    distance: "225 mil. km",
    time: "9 months",
  },
  {
    name: "europa",
    text: `The smallest of the four Galilean moons orbiting Jupiter, Europa is
    a winter lover’s dream. With an icy surface, it’s perfect for a bit
    of ice skating, curling, hockey, or simple relaxation in your snug
    wintery cabin.`,
    distance: "628 mil. km",
    time: "3 years",
  },
  {
    name: "titan",
    text: `The only moon known to have a dense atmosphere other than Earth,
    Titan is a home away from home (just a few hundred degrees colder!).
    As a bonus, you get striking views of the Rings of Saturn.`,
    distance: "1.6 bil. km",
    time: "7 years",
  },
];

function Destination() {
  const [tabState, setTabState] = useState("moon");

  const swtichTab = function (tabName) {
    setTabState(tabName);
  };

  return (
    <main className="destination grid-container">
      <div className="destination__title">
        <div className="sub-title">
          <span className="heading-5 sub-title__num">01</span>
          <span className="heading-5 sub-title__text">
            Pick your destination
          </span>
        </div>

        {destinationObj.map((planet) => {
          return (
            <figure
              key={planet.name}
              className={`planet-img ${
                tabState === planet.name ? "planet-img--active" : ""
              }`}
            >
              <img
                src={`./image/destination/image-${planet.name}.png`}
                alt={planet.name}
              />
            </figure>
          );
        })}
      </div>

      <div className="destination__content">
        <div className="sub-nav nav-text">
          {destinationObj.map((planet) => {
            return (
              <div
                key={planet.name}
                className={`sub-nav__link ${
                  tabState === planet.name ? "sub-nav__link--active" : ""
                }`}
                onClick={() => swtichTab(planet.name)}
              >
                {planet.name}
              </div>
            );
          })}
        </div>

        {destinationObj.map((planet) => {
          return (
            <div
              key={planet.name}
              className={`destination__text ${
                tabState === planet.name ? "destination__text--active" : ""
              }`}
            >
              <h2 className="heading-2">{planet.name}</h2>
              <span className="body-text">{planet.text}</span>
              <div className="destination__info">
                <div className="destination__info-1">
                  <span className="subheading-2">Avg. distance</span>
                  <span className="subheading-1">{planet.distance}</span>
                </div>
                <div className="destination__info-2">
                  <span className="subheading-2">Est. travel time</span>
                  <span className="subheading-1">{planet.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Destination;
