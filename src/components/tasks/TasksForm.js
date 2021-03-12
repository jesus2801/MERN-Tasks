import React, {useContext, useEffect, useState} from 'react';

import projectsContext from '../../context/projects/Projectcontext';
import tasksContext from '../../context/tasks/TaskContext';
import helpers from '../../functions';

const TasksForm = () => {
  const {project} = useContext(projectsContext);
  const {addTask, getProjectTasks, taskSelected, updateTask, saveActualTask} = useContext(
    tasksContext
  );

  //form state
  const [task, setTask] = useState({
    name: '',
  });
  const {name} = task;

  useEffect(() => {
    if (taskSelected !== null) {
      setTask(taskSelected);
    } else {
      setTask({
        name: '',
      });
    }
  }, [taskSelected]);

  if (!project) return null;

  const [actualProject] = project;

  //read form values
  const handleChange = e => {
    setTask({...task, [e.target.name]: e.target.value});
  };

  const onSubmit = e => {
    e.preventDefault();

    //validate
    if (name.trim() === '') {
      helpers.showError('You cannot create an empty task');
      return;
    }

    //if submit is for edit or for add
    if (taskSelected === null) {
      //add task to state
      task.project = actualProject._id;
      addTask(task);

      getProjectTasks(actualProject._id);

      //reset form
      setTask({
        name: '',
      });
      return;
    }

    taskSelected.name = name;
    updateTask(taskSelected);
    saveActualTask(null);

    //reset form
    setTask({
      name: '',
    });
  };

  return (
    <div className="form-ctn">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          name="name"
          value={name}
          onChange={handleChange}
          onFocus={e => {
            e.target.parentNode.querySelector('.lines').classList.add('active');
          }}
          onBlur={e => {
            e.target.parentNode.querySelector('.lines').classList.remove('active');
          }}
        />
        <div className="lines">
          <div></div>
          <div></div>
        </div>
        <input
          type="submit"
          value={taskSelected ? 'Edit task' : 'Add task'}
          className="button-1"
        />
      </form>
    </div>
  );
};

export default TasksForm;
