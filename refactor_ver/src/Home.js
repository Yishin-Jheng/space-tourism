import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home grid-container">
      <div className="home__text">
        <div className="heading-5">So, you want to travel to</div>
        <h1 className="heading-1 home__h1">Space</h1>

        <span className="body-text home__span">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </span>
      </div>
      <div className="home__btn">
        <div className="btn">
          <Link to="/destination">
            <span>Explore</span>
          </Link>
        </div>
        <div className="btn--hover">&nbsp;</div>
      </div>
    </main>
  );
}

export default Home;
