import React from 'react';
import { motion } from 'framer-motion';
import { FiRefreshCw } from 'react-icons/fi';
import { WiHumidity, WiStrongWind } from 'react-icons/wi';

function WeatherCard({ weatherData, onRefresh }) {
  const { name, main, weather, wind } = weatherData;
  const { temp, humidity } = main;
  const { description, icon } = weather[0];
  const { speed } = wind;

  return (
    <motion.div
      className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg my-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">{name}</h2>
        <motion.button
          onClick={onRefresh}
          className="bg-white text-blue-500 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiRefreshCw size={24} />
        </motion.button>
      </div>
      <div className="flex items-center my-6">
        <motion.img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className="w-24 h-24"
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200 }}
        />
        <div className="ml-6">
          <p className="text-5xl font-extrabold">{Math.round(temp)}°C</p>
          <p className="capitalize text-lg">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-4">
        <motion.div
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
        >
          <WiHumidity size={32} />
          <div>
            <p className="font-semibold text-lg">Humidity</p>
            <p>{humidity} %</p>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
        >
          <WiStrongWind size={32} />
          <div>
            <p className="font-semibold text-lg">Wind Speed</p>
            <p>{speed} km/h</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default WeatherCard;
