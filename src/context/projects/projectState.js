import React, {useReducer} from 'react';

import projectContext from './Projectcontext';
import projectReducer from './ProjectReducer';

import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
} from '../../types';
import axiosClient from '../../config/axios';
import helpers from '../../functions';

const ProjectState = props => {
  const initialState = {
    projects: [],
    projectForm: false,
    project: null,
  };

  //dispatch for actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  //functions for CRUD

  const showForm = () => {
    dispatch({
      type: PROJECT_FORM,
    });
  };

  const getProjects = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;
      const response = await axiosClient.get('/api/projects');

      dispatch({
        type: GET_PROJECTS,
        payload: response.data.projects,
      });
    } catch (e) {
      if (e.response.status === 401) {
        localStorage.removeItem('token');
        return;
      }
      helpers.showError('Sorry an error occurred');
    }
  };

  const addProject = async project => {
    try {
      const response = await axiosClient.post('/api/projects', project);

      //insert project in state
      dispatch({
        type: ADD_PROJECT,
        payload: response.data,
      });
    } catch (e) {
      helpers.showError('Sorry an error occurred');
    }
  };

  // when user click some project
  const actualProject = projectID => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: projectID,
    });
  };

  const deleteProject = async projectID => {
    try {
      await axiosClient.delete(`/api/projects/${projectID}`);

      dispatch({
        type: DELETE_PROJECT,
        payload: projectID,
      });
    } catch (e) {
      helpers.showError('Sorry an error occurred');
    }
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        projectForm: state.projectForm,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        actualProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
