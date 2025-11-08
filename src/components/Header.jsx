import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Roteirando ✈️
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded">
              Home
            </Link>
          </li>
          <li>
            <Link to="/roteiros" className="hover:bg-blue-700 px-3 py-2 rounded">
              Meus Roteiros
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};