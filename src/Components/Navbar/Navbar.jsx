// Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-white text-2xl font-bold tracking-wide">
              BrandName
            </a>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-gray-200 transition duration-300">
              Home
            </a>
            <a href="#about" className="text-white hover:text-gray-200 transition duration-300">
              About
            </a>
            <a href="#services" className="text-white hover:text-gray-200 transition duration-300">
              Services
            </a>
            <a href="#contact" className="text-white hover:text-gray-200 transition duration-300">
              Contact
            </a>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white hover:text-gray-200 focus:outline-none transition duration-300"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Home
            </a>
            <a href="#about" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              About
            </a>
            <a href="#services" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Services
            </a>
            <a href="#contact" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
