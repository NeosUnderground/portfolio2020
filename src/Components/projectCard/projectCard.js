import React from 'react';
import './projectCard.css';


const ProjectCard =({image, name, description, technolgy, url})=>{

  return(
    <div className='dib br2 ma1 bw2 shadow-5 grow tc f4 projectCard fadeIn hvrbox' data-aos="zoom-out-up">
        <img src={image} alt='projectImg' class='hvrbox-layer_bottom'/>
          <div className='hvrbox-layer_top'>
            <div className='hvrbox-text'>
            <a className='projectLink' href={url} target='blank'><h2 className='nameH2'>{name}</h2></a>
              <p className='descriptionP'>{description}</p>
              <p className='technolgyP'>{technolgy}</p>
            </div>
        </div>
    </div>
  );
}

export default ProjectCard;
