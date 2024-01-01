import React, { useState } from "react";
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
  const [wIcon, setWIcon] = useState(CloudIcon);
  let apiKey = "743892ac620af7dd554232d98524bd46";

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    //API url
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${apiKey}&units=metric`;
    //Fetching data
    let response = await fetch(url);
    //convert response data to the JSON format
    let data = await response.json();
    //getting access for the elements
    const humidity = document.getElementsByClassName("humidity-percent");
    const windSpeed = document.getElementsByClassName("wind-speed");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    //setting relevant data to the variables
    humidity[0].innerHTML = data.main.humidity + " %";
    windSpeed[0].innerHTML = Math.floor(data.wind.speed) + " Km/h";
    temprature[0].innerHTML = Math.floor(data.main.temp) + "°C";
    location[0].innerHTML = data.name;

    //setting icon accroding to the fetched data
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWIcon(ClearIcon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWIcon(CloudIcon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWIcon(DrizzleIcon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWIcon(DrizzleIcon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWIcon(RainIcon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWIcon(RainIcon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWIcon(SnowIcon);
    } else {
      setWIcon(ClearIcon);
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search..." />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={SearchIcon} alt="searchIcon" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wIcon} alt="weather-image" />
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
            <div className="wind-speed">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WeatherApp;
