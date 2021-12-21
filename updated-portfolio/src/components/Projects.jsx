import React, { useContext } from 'react';
import ApplicationContext from '../context/ApplicationContext';
import '../styles/projects.css';

function Projects() {
  const { portuguese } = useContext(ApplicationContext);
  return (
    <section className="projects-section" id="projects">
      <div className="projects-title-container">
        <h1 className="projects-title">{portuguese ? 'Projetos' : 'Projects'}</h1>
      </div>
    </section>
  );
}

export default Projects;
