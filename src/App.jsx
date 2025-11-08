import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { MyItineraries } from './pages/MyItineraries';
import { NewItinerary } from './pages/NewItinerary';
import { EditItinerary } from './pages/EditItinerary';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/roteiros" element={<MyItineraries />} />
        <Route path="/roteiro/novo" element={<NewItinerary />} />
        <Route path="/roteiro/editar/:id" element={<EditItinerary />} />
      </Routes>
    </Router>
  );
}

export default App;