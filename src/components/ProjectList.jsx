// src/components/ProjectsList.js
import React from 'react';
import Project from './Project';

const ProjectsList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      {projects.map((project, index) => (
        <Project key={index} title={project.title} image={project.image} gitLink={project.gitLink} vistLink={project.vistLink} about={project.about} />
      ))}
    </div>
  );
};

export default ProjectsList;
