import React from 'react'
import ProjectCard from './Card/ProjectCard'
function Section2() {
  return (
    <div>
     <ProjectCard
        title="Object Detection AI"
        author="Zaid Rakhange"
        description="An advanced computer vision tool for real-time hand and object detection using state-of-the-art machine learning algorithms."
        category="AI"
        stars={154}
        forks={23}
        imageUrl="https://socialify.git.ci/zaid-commits/tools/image?description=1&descriptionEditable=lorem%20ipsum%20dolor%20set%20amet!&font=KoHo&forks=1&issues=1&language=1&name=1&owner=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Dark"
      />
    </div>
  )
}

export default Section2
