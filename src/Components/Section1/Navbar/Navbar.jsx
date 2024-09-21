import React from 'react';

const FloatingNavbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gray bg-opacity-70 backdrop-blur-md rounded-full shadow-lg border border-gray-700 z-10 p-4">
      <div className="flex items-center space-x-6">
        {/* Logo */}
        {/* <img src="/path/to/logo.png" alt="PerceptAI Logo" className="h-8" /> */}
        
        {/* Navbar Items */}
        <span className="text-lg font-bold text-white">PerceptAI</span>
        <a href="https://github.com/zaid/commits" className="text-gray-300 hover:text-white transition-colors duration-200 ">
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
