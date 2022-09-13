import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <ul>
              <li>New York</li>
              <li>Thursday 8 am</li>
              <li>Description</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>icon</li>
              <li>17 °C</li>
              <li>Humidity</li>
              <li>Wind</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
