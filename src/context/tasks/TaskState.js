import React, {useReducer} from 'react';
import {PROJECT_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK, ACTUAL_TASK} from '../../types';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';

const TaskState = props => {
  const initialState = {
    tasks: [
      {id: 1, name: 'Elegir colores', state: true, projectID: 1},
      {id: 2, name: 'Elegir plataforma', state: false, projectID: 1},
      {id: 3, name: 'Seleccionar empleados', state: true, projectID: 1},
      {id: 4, name: 'Elegir colores', state: true, projectID: 2},
      {id: 5, name: 'Elegir Hosting', state: false, projectID: 2},
    ],
    projectTasks: [],
    taskSelected: null,
  };

  // dispatch and state
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  //funcitons
  const getProjectTasks = projectID => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectID,
    });
  };

  const addTask = task => {
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  const deleteTask = projectID => {
    dispatch({
      type: DELETE_TASK,
      payload: projectID,
    });
  };

  const updateTask = task => {
    dispatch({
      type: UPDATE_TASK,
      payload: task,
    });
  };

  const saveActualTask = task => {
    dispatch({
      type: ACTUAL_TASK,
      payload: task,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        projectTasks: state.projectTasks,
        taskSelected: state.taskSelected,
        getProjectTasks,
        addTask,
        deleteTask,
        updateTask,
        saveActualTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
