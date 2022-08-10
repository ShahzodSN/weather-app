import React, { useState } from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = useState([{}]);
  const [city, setCity] = useState("");

  const apiKey = "055cf4e4ce4919f11fde4532a65f80f5";

  const getWeather = (e) => {
    if (e.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setCity("");
        });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <input
          type="text"
          placeholder="Search for a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={getWeather}
        />

        {typeof weather.main != "undefined" ? (
          <div className="weather-container">
            <div className="location">
              <i>&#xf1ad;</i> {weather.name} , {weather.sys.country}
            </div>
            <div className="temp">
              {" "}
              <i>&#xf185;</i> {Math.round(weather.main.temp)}*C
            </div>
            <div className="weather">
              {" "}
              <i>&#xf75f;</i> {weather.weather[0].main}
            </div>
            <div className="wind">
              {" "}
              <i>&#xf72e;</i> {weather.wind.speed} m/s
            </div>
          </div>
        ) : (
          <div className="weather-container">
            <h1>Welcome to Weather App</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
