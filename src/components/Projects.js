import React from "react";
import "../styles/Project.css";
import Slide from "react-reveal/Slide";

export default function Projects(props) {
  return (
    <div className="projectContainer">
      <div className="projectFrame">
        <h1>Projects</h1>
      </div>
      <div className="wrapper">
        <Slide top opposite when={props.show}>
          <div className="pleftColumn">
            <h1>Left Column</h1>
          </div>
        </Slide>
        <Slide bottom opposite when={props.show}>
          <div className="prightColumn">
            <h1>Right Column</h1>
          </div>
        </Slide>
      </div>
    </div>
  );
}
