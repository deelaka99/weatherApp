import React from "react";
import "./weatherapp.css";

import SearchIcon from "../assets/search.png";
import ClearIcon from "../assets/clear.png";
import CloudIcon from "../assets/cloud.png";
import DrizzleIcon from "../assets/drizzle.png";
import RainIcon from "../assets/rain.png";
import SnowIcon from "../assets/snow.png";
import WindIcon from "../assets/wind.png";
import HumidityIcon from "../assets/humidity.png";

function WeatherApp() {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search..." />
        <div className="search-icon">
          <img src={SearchIcon} alt="searchIcon" />
        </div>
      </div>
      <div className="weather-image">
        <img src={CloudIcon} alt="weather-image" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={HumidityIcon} alt="icon" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={WindIcon} alt="icon" className="icon" />
          <div className="data">
            <div className="humidity-percent">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WeatherApp;
