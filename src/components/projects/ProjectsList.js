import React, {useContext, useEffect} from 'react';
import Project from '../projects/Project';
import projectsContext from '../../context/projects/Projectcontext';

const ProjectsList = () => {
  const {projects, getProjects} = useContext(projectsContext);

  //get projects
  useEffect(() => {
    getProjects();
  }, []);

  if (projects.length === 0) return null;

  return (
    <ul className="projects-list">
      {projects.map(project => (
        <Project project={project} key={project.id} />
      ))}
    </ul>
  );
};

export default ProjectsList;
