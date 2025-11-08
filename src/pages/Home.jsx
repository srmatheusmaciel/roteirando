import React from 'react';

export const Home = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold my-8">
        Para onde você quer viajar?
      </h1>
      
      <div className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Digite o nome da cidade (ex: Lisboa)"
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="mt-4 w-full bg-blue-600 text-white p-4 rounded-lg font-semibold hover:bg-blue-700 shadow-lg">
          Buscar Destino
        </button>
      </div>

      <div className="mt-8">
        {/* Fazer aqui a area onde o clima vai aparecer */}
      </div>
    </div>
  );
};