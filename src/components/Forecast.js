import React from 'react';

function Forecast({ forecastData }) {
  // Select one entry per day (approximately every 8th reading)
  const dailyForecast = forecastData.list.filter((_, i) => i % 8 === 0);

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-2">5-Day Forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {dailyForecast.map((day, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 p-4 rounded shadow-sm text-center"
          >
            <p className="font-semibold">{new Date(day.dt * 1000).toLocaleDateString()}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="w-12 h-12 mx-auto"
            />
            <p className="mt-2">{Math.round(day.main.temp)} °C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
