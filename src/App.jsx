import React from "react";
import WeatherApp from "./components/WeatherApp";

function App() {
  return (
    <div
      style={{
        height:"100vh",
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "linear-gradient(180deg, #130754 0%, #3b2f80 100%)",
      }}
    >
      <WeatherApp />
    </div>
  );
}

export default App;
