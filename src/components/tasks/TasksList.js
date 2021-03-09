import React, {useContext} from 'react';

import Task from '../tasks/Task';

import projectsContext from '../../context/projects/Projectcontext';
import taskContext from '../../context/tasks/TaskContext';

const TasksList = () => {
  const {projectTasks} = useContext(taskContext);

  const {project, deleteProject} = useContext(projectsContext);

  if (!project)
    return (
      <div className="tasks-ctn">
        <h2 style={{marginTop: '40px'}}>SELECT A PROJECT</h2>
      </div>
    );

  const [actualProject] = project;

  const onDeleteProject = () => deleteProject(actualProject.id);

  return (
    <div className="tasks-ctn">
      <h2>PROJECT: {actualProject.name}</h2>
      <ul>
        {projectTasks.length === 0 ? (
          <p>No hay tareas</p>
        ) : (
          projectTasks.map(task => <Task task={task} key={task.id} />)
        )}
      </ul>
      <button className="delete-project" onClick={onDeleteProject}>
        Delete project &times;
      </button>
    </div>
  );
};

export default TasksList;
