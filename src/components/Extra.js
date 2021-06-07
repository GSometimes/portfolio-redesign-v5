import React from "react";
import "../styles/Extra.css";

export default function Extra() {
  return (
    <div className="extraContainer">
      <div className="extraFrame">
        <h1>Extra</h1>
      </div>
      <div className="wrapper">
        <div className="eleftColumn">
          <h1>Left Column</h1>
        </div>
        <div className="erightColumn">
          <h1>Right Column</h1>
        </div>
      </div>
    </div>
  );
}
