import React from 'react';
import { Star, GitBranch, ExternalLink } from 'lucide-react';
import Github from '../Button/Github';
import Try from '../Button/Try';

const ProjectCard = ({ 
  title, 
  author, 
  description, 
  category, 
  stars, 
  forks, 
  imageUrl 
}) => {
  return (
    <div className="w-full max-w-md bg-black border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      <div className="relative">
        <img
          src={imageUrl || "/api/placeholder/400/200"}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <span className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {category}
        </span>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{title}</h2>
        <p className="text-gray-400 text-sm mb-4">{author}</p>
        <p className="text-gray-300 text-sm mb-6">{description}</p>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-yellow-500">
              <Star size={18} className="mr-1" />
              <span className="font-semibold">{stars}</span>
            </div>
            <div className="flex items-center text-green-500">
              <GitBranch size={18} className="mr-1" />
              <span className="font-semibold">{forks}</span>
            </div>
          </div>
          <div className="text-gray-400 text-sm">Updated Recently</div>
        </div>
        <div className="flex space-x-3">
            <Github />
          <Try />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;