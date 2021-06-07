import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutFrame">
        <h1>About</h1>
      </div>
      <div className="wrapper">
        <div className="aleftColumn">
          <h1>Left Column</h1>
        </div>
        <div className="arightColumn">
          <h1>Right Column</h1>
        </div>
      </div>
    </div>
  );
}
