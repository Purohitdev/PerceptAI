import React from 'react';
import '../../../App.css'

const FloatingNavbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray bg-opacity-70 backdrop-blur-md rounded-full shadow-lg border border-gray-700 p-4">
      <div className="flex items-center space-x-6">
        <span className="text-lg font-bold text-white mr-6">PerceptAI</span>
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 ">
          Home
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
          Projects
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
          Resources
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default FloatingNavbar;