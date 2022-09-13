import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function showResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4f742d5e3ae8bb2ee757c24af4be3d50&units=metric`;
    axios.get(url).then(showResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                autoFocus="on"
                className="form-control"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <div className="WeatherInfo">
          <div className="container text-center">
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>{weatherData.city}</li>
                  <li>
                    <FormattedDate />
                  </li>
                  <li>{weatherData.description}</li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    <img src={weatherData.icon} alt="weather description" />{" "}
                  </li>
                  <li>17 °C</li>
                  <li>Humidity: {weatherData.humidity}</li>
                  <li>Wind: {weatherData.wind} km/h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
