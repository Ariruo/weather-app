import React, { useEffect, useState } from 'react';
import './App.css';

//checking if we are in production or development and using the correct backend URL 
const backendURL = process.env.REACT_APP_API_URL || 'http://localhost:9000/api';




function App() {
  const [weatherData, setWeatherData] = useState({});

  /**
   * Fetches weather data from the backend API.
   */
  const getWeatherFromApi = async () => {
    try {
      const response = await fetch(`${backendURL}/weather`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

   /**
   * Runs once on component mount.
   * Fetches weather data from the API.
   */

  useEffect(() => {
    getWeatherFromApi();
  }, []);


  return (
    <div className="app-container">
      <h1>Weather Data from Helsinki</h1>
      
      {weatherData && (
        <div className="weather-container">
          <p>Description: {weatherData.description}</p>
          <img
            className="weather-icon"
            src={`http://openweathermap.org/img/w/${weatherData.icon}.png`}
            alt="Weather Icon"
          />
        </div>
      )}
    </div>
  );
}

export default App;