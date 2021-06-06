import React, { useState, useRef } from "react";
import "../styles/Navbar.css";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Extra from "./Extra";

export default function Navbar(props) {
  const [transition, setTransition] = useState(false);
  const activeCircle = useRef();

  const handleClick = (color, route) => {
    activeCircle.current = color;
    setTransition(!transition);
    setTimeout(() => {
      color === "black"
        ? props.history.push("/")
        : props.history.push(`/${route}`);
    }, 1000);
  };

  const transitionActive1 = transition ? "circleTransition1" : "";
  const transitionActive2 = transition ? "circleTransition2" : "";
  const transitionActive3 = transition ? "circleTransition3" : "";
  const transitionActive4 = transition ? "circleTransition4" : "";

  const style = {
    zIndex: 1000,
  };

  return (
    <div className="navBar">
      <div className="displayBox">
        <div
          style={activeCircle.current === "blue" ? style : {}}
          className={`blueCircle ${transitionActive1}`}
          onClick={() => handleClick("blue", "projects")}
        ></div>
        <div
          style={activeCircle.current === "red" ? style : {}}
          className={`redCircle ${transitionActive2}`}
          onClick={() => handleClick("red", "about")}
        ></div>
        <div
          style={activeCircle.current === "purple" ? style : {}}
          className={`purpleCircle ${transitionActive3}`}
          onClick={() => handleClick("purple", "contact")}
        ></div>
        <div
          style={activeCircle.current === "grey" ? style : {}}
          className={`greyCircle ${transitionActive4}`}
          onClick={() => handleClick("grey", "extra")}
        ></div>
        <div className="circlesContainer">
          <div
            className="dotCircle"
            style={activeCircle.current === "black" ? style : {}}
            onClick={() => handleClick("black")}
          ></div>
        </div>
        <div className="footer">Portfolio by Sometimes</div>
      </div>

      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/extra">
          <Extra />
        </Route>
      </Switch>
    </div>
  );
}
