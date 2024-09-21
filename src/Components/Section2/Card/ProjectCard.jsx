// ProjectCard.js
import React from 'react';
import { Star, GitBranch, ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
          {project.category}
        </span>
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold text-white mb-2 truncate">{project.title}</h2>
        <p className="text-blue-300 text-sm mb-3">{project.author}</p>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-yellow-400">
              <Star size={16} className="mr-1" />
              <span className="font-semibold text-sm">{project.stars}</span>
            </div>
            <div className="flex items-center text-green-400">
              <GitBranch size={16} className="mr-1" />
              <span className="font-semibold text-sm">{project.forks}</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
            <Github size={16} className="mr-2" />
            <span className="text-sm font-semibold">View Code</span>
          </button>
          <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
            <ExternalLink size={16} className="mr-2" />
            <span className="text-sm font-semibold">Try Demo</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
