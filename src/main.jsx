import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ItineraryProvider } from './context/ItineraryProvider.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ItineraryProvider>
      <App />
    </ItineraryProvider>
  </React.StrictMode>,
)