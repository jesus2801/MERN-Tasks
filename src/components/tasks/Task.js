import React, {useContext} from 'react';
import taskContext from '../../context/tasks/TaskContext';
import projectsContext from '../../context/projects/Projectcontext';

const Task = ({task}) => {
  const {deleteTask, getProjectTasks, updateTask, saveActualTask} = useContext(
    taskContext
  );
  const {project} = useContext(projectsContext);
  const [actualProject] = project;

  const onDelete = id => {
    deleteTask(id);
    getProjectTasks(actualProject.id);
  };

  const handleState = task => {
    task.state = !task.state;
    updateTask(task);
  };

  const selectTask = task => {
    saveActualTask(task);
  };

  return (
    <li>
      <p>{task.name}</p>
      <div className="buttons">
        {task.state ? (
          <button className="completed btn-task" onClick={() => handleState(task)}>
            completed
          </button>
        ) : (
          <button className="incomplete btn-task" onClick={() => handleState(task)}>
            incomplete
          </button>
        )}
        <button className="btn-task" onClick={() => selectTask(task)}>
          Edit
        </button>
        <button className="btn-task" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
