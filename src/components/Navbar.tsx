// src/components/ui/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  logo: string;
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ logo, title }) => {
  return (
    <nav className="bg-white py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
          <h1 className="text-indigo-700 font-bold text-xl">{title}</h1>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-indigo-600 transition">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-indigo-600 transition">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-indigo-600 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;