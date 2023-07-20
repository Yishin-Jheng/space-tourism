import React, { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";
import "./css/style.css";

function App() {
  const location = useLocation().pathname.slice(1);

  return (
    <div className={`background-${location}`}>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/destination" exact component={Destination} />
      <Route path="/crew" exact component={Crew} />
      <Route path="/technology" exact component={Technology} />
    </div>
  );
}

export default App;
