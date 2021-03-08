import React, {useContext} from 'react';
import projectsContext from '../../context/projects/Projectcontext';

const Project = ({project}) => {
  const {actualProject} = useContext(projectsContext);

  return (
    <p onClick={() => actualProject(project.id)}>
      <span></span>
      {project.name}
    </p>
  );
};

export default Project;
