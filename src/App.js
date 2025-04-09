import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import RecentSearches from './components/RecentSearches';
import ThemeToggle from './components/ThemeToggle';
import './index.css';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark/light theme by updating html element class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  
  // Function to fetch current weather and forecast data from the OpenWeatherMap API
  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError('');
    try {
      // Fetch current weather data
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(weatherResponse.data);

      // Save to recent searches (unique, last 5)
      setRecentSearches((prev) => {
        const updated = [cityName, ...prev.filter(item => item.toLowerCase() !== cityName.toLowerCase())];
        return updated.slice(0, 5);
      });

      // Fetch 5-day forecast data
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setForecastData(forecastResponse.data);
    } catch (err) {
      setError('Unable to fetch weather data. Please ensure the city name is correct.');
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  // Handle search submission
  const handleSearch = (searchCity) => {
    setCity(searchCity);
    fetchWeather(searchCity);
  };

  // Refresh current city weather data
  const handleRefresh = () => {
    if (city) {
      fetchWeather(city);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors">
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Weather Dashboard</h1>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        
        <SearchBar onSearch={handleSearch} />
        
        {loading && (
          <div className="flex justify-center items-center my-4">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
          </div>
        )}
        
        {error && (
          <div className="bg-red-200 text-red-800 p-4 rounded my-4">
            {error}
          </div>
        )}

        {weatherData && (
          <>
            <WeatherCard weatherData={weatherData} onRefresh={handleRefresh} />
            {forecastData && <Forecast forecastData={forecastData} />}
          </>
        )}

        <RecentSearches searches={recentSearches} onSelect={handleSearch} />
      </div>
    </div>
  );
}

export default App;
