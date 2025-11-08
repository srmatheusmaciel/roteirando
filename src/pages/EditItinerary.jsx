import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useItineraries } from '../hooks/useItineraries';

export const EditItinerary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { itineraries, updateItinerary } = useItineraries();

  const [formData, setFormData] = useState({
    destination: '',
    days: '',
  });

  useEffect(() => {
    const itineraryId = Number(id); 
    const itineraryToEdit = itineraries.find(it => it.id === itineraryId);

    if (itineraryToEdit) {
      setFormData({
        destination: itineraryToEdit.destination,
        days: itineraryToEdit.days,
      });
    } else {
      console.error('Roteiro não encontrado!');
      navigate('/roteiros');
    }
  }, [id, itineraries, navigate]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.destination.trim() === '' || formData.days.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    updateItinerary(Number(id), formData);

    navigate('/roteiros');
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-3xl font-bold mb-6">Editar Roteiro</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
            Destino (Cidade)
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="days" className="block text-sm font-medium text-gray-700">
            Número de Dias
          </label>
          <input
            type="number"
            id="days"
            name="days"
            value={formData.days}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 shadow-lg"
          >
            Salvar Alterações
          </button>
        </div>
      </form>
    </div>
  );
};