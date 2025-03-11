// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignupForm from './components/SignupForm';

import './styles/globals.css';

// Import your logo
import logo from './assests/logo.png'; // Make sure to add this file to your project

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar logo={logo} title="Symbiosis Institute of Technology" />
        
        <main className="flex-grow py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route 
                path="/" 
                element={
                  <div className="flex flex-col items-center md:flex-row md:items-stretch gap-12">
                    <div className="md:w-1/2 flex items-center">
                      <div>
                        <h1 className="text-4xl font-bold text-gray-800 mb-6">Begin Your Academic Journey</h1>
                        <p className="text-lg text-gray-600 mb-8">
                          Join Symbiosis Institute of Technology and unlock a world of opportunities. 
                          Our institution offers cutting-edge programs designed to prepare you for the 
                          challenges of tomorrow.
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-center text-gray-700">
                            <svg className="h-5 w-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            World-class faculty and research opportunities
                          </li>
                          <li className="flex items-center text-gray-700">
                            <svg className="h-5 w-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            State-of-the-art facilities and technology
                          </li>
                          <li className="flex items-center text-gray-700">
                            <svg className="h-5 w-5 text-indigo-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Industry connections and placement assistance
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2">
                      <SignupForm />
                    </div>
                  </div>
                } 
              />
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;