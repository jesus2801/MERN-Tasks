import React, {useContext} from 'react';
import projectsContext from '../../context/projects/Projectcontext';
import tasksContext from '../../context/tasks/TaskContext';

const Project = ({project}) => {
  const {actualProject} = useContext(projectsContext);

  const {getProjectTasks} = useContext(tasksContext);

  const addActualProject = id => {
    actualProject(id);
    getProjectTasks(id);
  };

  return (
    <p onClick={() => addActualProject(project._id)}>
      <span></span>
      {project.name}
    </p>
  );
};

export default Project;
