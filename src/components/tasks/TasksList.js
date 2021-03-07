import React from 'react';
import Task from '../tasks/Task';

const TasksList = () => {
  const projectTasks = [
    {name: 'Elegir colores', state: true},
    {name: 'Elegir plataforma', state: false},
    {name: 'Seleccionar empleados', state: true},
    {name: 'Elegir colores', state: true},
    {name: 'Elegir Hosting', state: false},
  ];

  return (
    <div className="tasks-ctn">
      <h2>Project: Diseño proyecto</h2>
      <ul>
        {projectTasks.length === 0 ? (
          <p>No hay tareas</p>
        ) : (
          projectTasks.map((task, index) => <Task task={task} key={index} />)
        )}
      </ul>
      <button className="delete-project">Delete project &times;</button>
    </div>
  );
};

export default TasksList;
