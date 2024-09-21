// ProjectGrid.js
import React from 'react';
import ProjectCard from '../Card/ProjectCard';
import '../Section2.css'

// Mock project data (could be imported from another file if needed)
const projects = [
  {
    title: "Object Detection AI",
    author: "Zaid Rakhange",
    description: "An advanced computer vision tool for real-time hand and object detection using state-of-the-art machine learning algorithms.",
    category: "AI",
    stars: 154,
    forks: 23,
    imageUrl: "https://socialify.git.ci/zaid-commits/tools/image?description=1&descriptionEditable=lorem%20ipsum%20dolor%20set%20amet!&font=KoHo&forks=1&issues=1&language=1&name=1&owner=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Dark"
  },{
    title: "Object Detection AI",
    author: "Zaid Rakhange",
    description: "An advanced computer vision tool for real-time hand and object detection using state-of-the-art machine learning algorithms.",
    category: "AI",
    stars: 154,
    forks: 23,
    imageUrl: "https://socialify.git.ci/zaid-commits/tools/image?description=1&descriptionEditable=lorem%20ipsum%20dolor%20set%20amet!&font=KoHo&forks=1&issues=1&language=1&name=1&owner=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Dark"
  },{
    title: "Object Detection AI",
    author: "Zaid Rakhange",
    description: "An advanced computer vision tool for real-time hand and object detection using state-of-the-art machine learning algorithms.",
    category: "AI",
    stars: 154,
    forks: 23,
    imageUrl: "https://socialify.git.ci/zaid-commits/tools/image?description=1&descriptionEditable=lorem%20ipsum%20dolor%20set%20amet!&font=KoHo&forks=1&issues=1&language=1&name=1&owner=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Dark"
  },{
    title: "Object Detection AI",
    author: "Zaid Rakhange",
    description: "An advanced computer vision tool for real-time hand and object detection using state-of-the-art machine learning algorithms.",
    category: "AI",
    stars: 154,
    forks: 23,
    imageUrl: "https://socialify.git.ci/zaid-commits/tools/image?description=1&descriptionEditable=lorem%20ipsum%20dolor%20set%20amet!&font=KoHo&forks=1&issues=1&language=1&name=1&owner=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Dark"
  },{
    title: "Object Detection AI",
    author: "Zaid Rakhange",
    description: "An advanced computer vision tool for real-time hand and object detection using state-of-the-art machine learning algorithms.",
    category: "AI",
    stars: 154,
    forks: 23,
    imageUrl: "https://socialify.git.ci/zaid-commits/tools/image?description=1&descriptionEditable=lorem%20ipsum%20dolor%20set%20amet!&font=KoHo&forks=1&issues=1&language=1&name=1&owner=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Dark"
  },{
    title: "Object Detection AI",
    author: "Zaid Rakhange",
    description: "An advanced computer vision tool for real-time hand and object detection using state-of-the-art machine learning algorithms.",
    category: "AI",
    stars: 154,
    forks: 23,
    imageUrl: "https://socialify.git.ci/zaid-commits/tools/image?description=1&descriptionEditable=lorem%20ipsum%20dolor%20set%20amet!&font=KoHo&forks=1&issues=1&language=1&name=1&owner=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Dark"
  },
  // More project objects...
];

function ProjectGrid() {
  return (
    <div className="projectGrid grid grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          author={project.author}
          description={project.description}
          category={project.category}
          stars={project.stars}
          forks={project.forks}
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;
