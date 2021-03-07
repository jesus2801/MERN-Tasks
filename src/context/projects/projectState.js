import React, {useReducer} from 'react';
import Swal from 'sweetalert2';
import {v4} from 'uuid';

import projectContext from './Projectcontext';
import projectReducer from './projectReducer';

import {PROJECT_FORM, GET_PROJECTS, ADD_PROJECT} from '../../types';

const ProjectState = props => {
  const projects = [
    {id: 1, name: 'diseño proyecto'},
    {id: 2, name: 'aprender laravel'},
    {id: 3, name: 'repasar java'},
  ];

  const initialState = {
    projects: [],
    projectForm: false,
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
    // console.log(project);
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  const showError = error => {
    Swal.fire('Error!', error, 'error');
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        projectForm: state.projectForm,
        showForm,
        getProjects,
        addProject,
        showError,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
