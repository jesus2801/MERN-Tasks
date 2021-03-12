import React, {useReducer} from 'react';
import {
  PROJECT_TASKS,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  ACTUAL_TASK,
} from '../../types';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import axiosClient from '../../config/axios';
import helpers from '../../functions';

const TaskState = props => {
  const initialState = {
    projectTasks: [],
    taskSelected: null,
  };

  // dispatch and state
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  //funcitons
  const getProjectTasks = async projectID => {
    try {
      const response = await axiosClient.get('/api/tasks', {
        params: {
          project: projectID,
        },
      });
      dispatch({
        type: PROJECT_TASKS,
        payload: response.data.tasks,
      });
    } catch (e) {
      helpers.showError('Sorry an error occurred');
    }
  };

  const addTask = async task => {
    try {
      const response = await axiosClient.post('/api/tasks', task);
      dispatch({
        type: ADD_TASK,
        payload: response.data.task,
      });
    } catch (e) {
      helpers.showError('Sorry an error occurred');
    }
  };

  const deleteTask = async (taskID, project) => {
    try {
      await axiosClient.delete(`/api/tasks/${taskID}`, {
        params: {project},
      });

      dispatch({
        type: DELETE_TASK,
        payload: taskID,
      });
    } catch (e) {
      helpers.showError('Sorry an error occurred');
    }
  };

  const updateTask = async task => {
    try {
      const response = await axiosClient.put(`/api/tasks/${task._id}`, task);

      dispatch({
        type: UPDATE_TASK,
        payload: response.data.task,
      });
    } catch (e) {
      helpers.showError('Sorry an error occurred');
    }
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
