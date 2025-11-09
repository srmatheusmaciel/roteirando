import React, { useState } from 'react';
import axios from 'axios';

import { WeatherCard } from '../components/WeatherCard'; 

export const Home = () => {

  console.log("A chave da API é:", import.meta.env.VITE_OPENWEATHER_API_KEY);
  
  const [city, setCity] = useState('');
  
  const [weatherData, setWeatherData] = useState(null); 
  const [loading, setLoading] = useState(false);       
  const [error, setError] = useState(null);         

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

  const handleSearch = async (e) => {
    e.preventDefault();
    if (city.trim() === '') {
      setError('Por favor, digite o nome de uma cidade.');
      return;
    }

    setLoading(true);    
    setError(null);     
    setWeatherData(null);

    try {
      const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
      
      const response = await axios.get(url);
      
      setWeatherData(response.data);

    } catch (err) {
      console.error("Erro ao buscar dados da API:", err);
      if (err.response && err.response.status === 404) {
        setError('Cidade não encontrada. Verifique o nome e tente novamente.');
      } else {
        setError('Não foi possível buscar o clima. Tente novamente mais tarde.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold my-8">
        Para onde você quer viajar?
      </h1>
      
      <form onSubmit={handleSearch} className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Digite o nome da cidade (ex: Lisboa)"
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button 
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white p-4 rounded-lg font-semibold hover:bg-blue-700 shadow-lg disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? 'Buscando...' : 'Buscar Destino'}
        </button>
      </form>

      <div className="mt-8">
        {loading && (
          <p className="text-blue-600 text-lg">Carregando clima...</p>
        )}
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md mx-auto">
            <strong className="font-bold">Erro: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {weatherData && (
          <WeatherCard data={weatherData} />
        )}
      </div>
    </div>
  );
};