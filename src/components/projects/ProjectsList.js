import React, {useContext, useEffect} from 'react';
import Project from '../projects/Project';
import projectsContext from '../../context/projects/Projectcontext';

const ProjectsList = () => {
  const {projects, getProjects} = useContext(projectsContext);

  //get projects
  useEffect(() => {
    getProjects();
    // eslint-disable-next-line
  }, []);

  if (projects.length === 0)
    return (
      <p
        style={{
          marginTop: '30px',
          fontWeight: '300',
          fontSize: '15px',
        }}
      >
        You don't have projects, start by creating one
      </p>
    );

  return (
    <ul className="projects-list">
      {projects.map(project => (
        <Project project={project} key={project._id} />
      ))}
    </ul>
  );
};

export default ProjectsList;
