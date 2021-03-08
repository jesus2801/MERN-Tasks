import React, {useReducer} from 'react';
import {v4} from 'uuid';

import projectContext from './Projectcontext';
import projectReducer from './ProjectReducer';

import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
} from '../../types';

const ProjectState = props => {
  const projects = [
    {id: 1, name: 'diseño proyecto'},
    {id: 2, name: 'aprender laravel'},
    {id: 3, name: 'repasar java'},
  ];

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

  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  const addProject = project => {
    project.id = v4();
    //insert project in state
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  // when user click some project
  const actualProject = projectID => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: projectID,
    });
  };

  const deleteProject = projectID => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectID,
    });
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
