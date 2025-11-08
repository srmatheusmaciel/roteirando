import React from 'react';
import { ItineraryContext } from './ItineraryContext'; 
import { useLocalStorage } from '../hooks/useLocalStorage';

export const ItineraryProvider = ({ children }) => {
  
  const [itineraries, setItineraries] = useLocalStorage('itineraries', []);

  const addItinerary = (newItinerary) => {
    const itineraryWithId = { ...newItinerary, id: Date.now() };
    
    setItineraries(prevItineraries => [...prevItineraries, itineraryWithId]);
  };

  const deleteItinerary = (id) => {
    setItineraries(prevItineraries => 
      prevItineraries.filter(it => it.id !== id)
    );
  };

  const updateItinerary = (id, updatedData) => {
    setItineraries(prevItineraries =>
      prevItineraries.map(it => 
        it.id === id 
          ? { ...it, ...updatedData } 
          : it
      )
    );
  };

  const value = {
    itineraries,    
    addItinerary,   
    deleteItinerary,
    updateItinerary,
  };

  return (
    <ItineraryContext.Provider value={value}>
      {children}
    </ItineraryContext.Provider>
  );
};