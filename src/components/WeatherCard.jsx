import React from 'react';

export const WeatherCard = ({ data }) => {
  
  const weatherInfo = data.weather[0];
  
  const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;

  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-xl p-6">
      <h2 className="text-3xl font-bold">{data.name}, {data.sys.country}</h2>
      
      <div className="flex items-center justify-center my-4">
        <img src={iconUrl} alt={weatherInfo.description} className="w-20 h-20" />
        <div className="ml-4">
          <p className="text-5xl font-semibold">{Math.round(data.main.temp)}°C</p>
          <p className="text-xl capitalize">{weatherInfo.description}</p>
        </div>
      </div>

      <div className="flex justify-around text-lg">
        <div>
          <p className="font-semibold">Sensação</p>
          <p>{Math.round(data.main.feels_like)}°C</p>
        </div>
        <div>
          <p className="font-semibold">Umidade</p>
          <p>{data.main.humidity}%</p>
        </div>
        <div>
          <p className="font-semibold">Vento</p>
          <p>{data.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};