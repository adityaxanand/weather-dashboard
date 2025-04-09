import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError('');
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(weatherResponse.data);

      setRecentSearches((prev) => {
        const updated = [cityName, ...prev.filter(item => item.toLowerCase() !== cityName.toLowerCase())];
        return updated.slice(0, 5);
      });

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

  const handleSearch = (searchCity) => {
    setCity(searchCity);
    fetchWeather(searchCity);
  };

  const handleRefresh = () => {
    if (city) {
      fetchWeather(city);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-200 to-indigo-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto py-8 px-4">
        <motion.div
          className="flex justify-between items-center mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold tracking-wide">
            Clima
          </h1>
          {/* Use ThemeToggle Component */}

      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </motion.div>

        <SearchBar
          onSearch={handleSearch}
          placeholder="Search for a city..."
          icon={<FaSearch className="text-gray-500" />}
        />

        {loading && (
          <motion.div
            className="flex justify-center items-center my-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
          </motion.div>
        )}

        {error && (
          <motion.div
            className="bg-red-500 text-white p-4 rounded-lg shadow-lg my-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {error}
          </motion.div>
        )}

        {weatherData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <WeatherCard
              weatherData={weatherData}
              onRefresh={handleRefresh}
            />
            {forecastData && <Forecast forecastData={forecastData} />}
          </motion.div>
        )}

        <RecentSearches
          searches={recentSearches}
          onSelect={handleSearch}
          icon={<FaSearch className="text-gray-400" />}
        />
      </div>
    </motion.div>
  );
}

export default App;
