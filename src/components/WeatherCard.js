import React from 'react';
import { motion } from 'framer-motion';

function WeatherCard({ weatherData, onRefresh }) {
  const { name, main, weather, wind } = weatherData;
  const { temp, humidity } = main;
  const { description, icon } = weather[0];
  const { speed } = wind;

  return (
    <motion.div 
      className="bg-white dark:bg-gray-700 p-6 rounded shadow-md my-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{name}</h2>
        <button
          onClick={onRefresh}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition-colors"
        >
          Refresh
        </button>
      </div>
      <div className="flex items-center my-4">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className="w-20 h-20"
        />
        <div className="ml-4">
          <p className="text-4xl font-semibold">{Math.round(temp)} °C</p>
          <p className="capitalize">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">Humidity:</p>
          <p>{humidity} %</p>
        </div>
        <div>
          <p className="font-semibold">Wind Speed:</p>
          <p>{speed} km/h</p>
        </div>
      </div>
    </motion.div>
  );
}

export default WeatherCard;
