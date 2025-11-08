import React from 'react';

export const MyItineraries = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Meus Roteiros Salvos</h1>
      
      
      <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
        <p className="text-gray-500">
          Você ainda não salvou nenhum roteiro.
        </p>
        {/* Fazer uma lista de itinerarios */}
      </div>
    </div>
  );
};