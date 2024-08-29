import React, { useState } from 'react';
import './App.css';
import { FaCloud, FaSun, FaCloudRain, FaSnowflake, FaSmog } from 'react-icons/fa';

const api = {
  key: "0a05a45700e0516177470a3f8dc58199", 
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const getWeather = (e) => {
    e.preventDefault();

    // Fetch current weather
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });

    // Fetch 5-day forecast
    fetch(`${api.base}forecast?q=${city}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        const filteredForecast = result.list.filter(reading => reading.dt_txt.includes("12:00:00"));
        setForecast(filteredForecast);
      });
  };

  const getWeatherIcon = (weatherMain) => {
    switch (weatherMain) {
      case 'Clear':
        return <FaSun />;
      case 'Cloud':
        return <FaCloud />;
      case 'Rain':
        return <FaCloudRain />;
      case 'Snow':
        return <FaSnowflake />;
      case 'Mist':
      case 'Smoke':
      case 'Haze':
      case 'Fog':
      case 'Sand':
      case 'Dust':
      case 'Ash':
      case 'Squall':
      case 'Tornado':
        return <FaSmog />;
      default:
        return <FaCloud />;
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={getWeather}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {weather && weather.main && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <div className="weather-details">
            <div className="weather-icon">
              {getWeatherIcon(weather.weather[0].main)}
            </div>
            <div className="weather-data">
              <p>Temperature: {weather.main.temp}°C</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Wind Speed: {weather.wind.speed} m/s</p>
              <p>Condition: {weather.weather[0].description}</p>
            </div>
          </div>
        </div>
      )}

      {forecast.length > 0 && (
        <div className="forecast">
          <h2>5-Day Forecast</h2>
          <div className="forecast-container">
            {forecast.map((day, index) => (
              <div key={index} className="forecast-day">
                <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
                <div className="forecast-icon">
                  {getWeatherIcon(day.weather[0].main)}
                </div>
                <p>{day.main.temp}°C</p>
                <p>{day.weather[0].description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
