import { useContext } from 'react';
import { ItineraryContext } from '../context/ItineraryContext.js'; 

export const useItineraries = () => {
  const context = useContext(ItineraryContext);
  
  if (context === undefined) {
    throw new Error('useItineraries must be used within a ItineraryProvider');
  }
  
  return context;
};