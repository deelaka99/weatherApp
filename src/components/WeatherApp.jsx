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
        <div className="searchIcon">
          <img src={SearchIcon} alt="searchIcon" />
        </div>
      </div>
    </div>
  );
}
export default WeatherApp;
