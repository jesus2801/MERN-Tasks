import {PROJECT_FORM, GET_PROJECTS, ADD_PROJECT} from '../../types';

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
    default:
      return state;
  }
};

export default reducer;
