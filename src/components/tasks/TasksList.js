import React, {useContext} from 'react';
import Task from '../tasks/Task';

import projectsContext from '../../context/projects/Projectcontext';

const TasksList = () => {
  const projectTasks = [
    {name: 'Elegir colores', state: true},
    {name: 'Elegir plataforma', state: false},
    {name: 'Seleccionar empleados', state: true},
    {name: 'Elegir colores', state: true},
    {name: 'Elegir Hosting', state: false},
  ];

  const {project, deleteProject} = useContext(projectsContext);

  if (!project)
    return (
      <div className="tasks-ctn">
        <h2 style={{marginTop: '40px'}}>SELECT A PROJECT</h2>
      </div>
    );

  const [actualProject] = project;

  const onDeleteProject = ()=> deleteProject(actualProject.id);

  return (
    <div className="tasks-ctn">
      <h2>PROJECT: {actualProject.name}</h2>
      <ul>
        {projectTasks.length === 0 ? (
          <p>No hay tareas</p>
        ) : (
          projectTasks.map((task, index) => <Task task={task} key={index} />)
        )}
      </ul>
      <button className="delete-project" onClick={onDeleteProject}>Delete project &times;</button>
    </div>
  );
};

export default TasksList;
