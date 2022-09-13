import React from "react";
import Weather from "./Weather";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <ul>
              <li>{weather.city}</li>
              <li>{weather.date}</li>
              <li>{weather.description}</li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>{weather.icon} </li>
              <li>17 °C</li>
              <li>Humidity: {weather.humidity}</li>
              <li>Wind: {weather.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
