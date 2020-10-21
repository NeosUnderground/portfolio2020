import React from 'react';
import './projects.css';
import ProjectCard from '../projectCard/projectCard';

const Projects=({projects})=>{

  const projectCardComponent = projects.map((project, i) =>{
    return <ProjectCard
                        id={projects[i].id}
                        image={projects[i].image}
                        name={projects[i].name}
                        description={projects[i].description}
                        technolgy={projects[i].technolgy}
                        url = {projects[i].url}/>
  })

  return(
    <div className='projectsContainer'>
      <div className='projectsCardContainer'>
        {projectCardComponent}
      </div>
    </div>
  );
}

export default Projects;
