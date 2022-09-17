import React from "react";

export default function DailyForecast(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }
  function showIcon() {
    let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return `${icon}`;
  }
  return (
    <div className="Forecast">
      <div className="ForecastDate">{day()}</div>
      <div className="ForecastIcon">
        <img src={showIcon()} alt="warm" />
      </div>
      <div className="ForecastTemperature">
        <span className="ForecastTemperatureMax"> {maxTemp()}°C</span>
        <span className="ForecastTemperatureMin"> {minTemp()}°C</span>
      </div>
    </div>
  );
}
