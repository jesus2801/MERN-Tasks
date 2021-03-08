import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
} from '../../types';

const reducer = (state, action) => {
  switch (action.type) {
    case PROJECT_FORM:
      return {
        ...state,
        projectForm: true,
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        projectForm: false,
      };
    case ACTUAL_PROJECT:
      return {
        ...state,
        project: state.projects.filter(project => project.id === action.payload),
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload),
        project: null,
      };
    default:
      return state;
  }
};

export default reducer;
