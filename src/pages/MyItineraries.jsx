import React from 'react';
import { Link } from 'react-router-dom';
import { useItineraries } from '../hooks/useItineraries'; 

export const MyItineraries = () => {
  const { itineraries, deleteItinerary } = useItineraries();

  const handleDelete = (id, destination) => {
    const confirmDelete = window.confirm(
      `Tem certeza que deseja excluir o roteiro para "${destination}"?`
    );

    if (confirmDelete) {
      deleteItinerary(id);
    }
  };

  return (
    <div className="container mx-auto p-4">
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Meus Roteiros Salvos</h1>
        <Link 
          to="/roteiro/novo" 
          className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 shadow-md"
        >
          + Criar Novo Roteiro
        </Link>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        {itineraries.length === 0 ? (
          <p className="text-gray-500 text-center">
            Você ainda não salvou nenhum roteiro.
          </p>
        ) : (
          <ul className="space-y-4">
            {itineraries.map(it => (
              <li 
                key={it.id} 
                className="flex justify-between items-center p-4 border rounded-lg shadow-sm hover:bg-gray-50"
              >
                <div>
                  <h3 className="text-xl font-semibold text-blue-700">{it.destination}</h3>
                  <p className="text-gray-600">{it.days} dias</p>
                </div>
                
                <div className="space-x-2">
                  <Link 
                    to={`/roteiro/editar/${it.id}`}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Editar
                  </Link>
                  <button 
                    onClick={() => handleDelete(it.id, it.destination)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
};