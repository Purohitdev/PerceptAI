// Sidebar.js
import React from 'react';

function Sidebar() {
  return (
    <div className="w-1/5 bg-gray-100 p-4 rounded-md shadow-md h-full">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      {/* Add sidebar content here */}
      <p>This is the sidebar content. Add links, profiles, or categories here.</p>
      {/* Example navigation */}
      <nav className="mt-4">
        <ul className="space-y-2">
          <li><a href="#projects" className="text-sm hover:bg-gray-200 p-2 block rounded">Projects</a></li>
          <li><a href="#about" className="text-sm hover:bg-gray-200 p-2 block rounded">About Me</a></li>
          <li><a href="#contact" className="text-sm hover:bg-gray-200 p-2 block rounded">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
