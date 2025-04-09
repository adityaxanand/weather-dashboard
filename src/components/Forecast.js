import React from 'react';
import { motion } from 'framer-motion';
import { FaTemperatureHigh } from 'react-icons/fa';

function Forecast({ forecastData }) {
  // Select one entry per day (approximately every 8th reading)
  const dailyForecast = forecastData.list.filter((_, i) => i % 8 === 0);

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">
        5-Day Forecast
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {dailyForecast.map((day, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <p className="font-semibold text-white">
              {new Date(day.dt * 1000).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'short',
                day: 'numeric',
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="w-16 h-16 mx-auto mt-2"
            />
            <p className="mt-4 text-white text-lg flex items-center justify-center gap-2">
              <FaTemperatureHigh className="text-yellow-300" />
              {Math.round(day.main.temp)} °C
            </p>
            <p className="text-sm text-gray-200 mt-2 capitalize">
              {day.weather[0].description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
