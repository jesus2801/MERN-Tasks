import {
  PROJECT_TASKS,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  ACTUAL_TASK,
} from '../../types';

const reducer = (state, action) => {
  switch (action.type) {
    case PROJECT_TASKS:
      return {
        ...state,
        projectTasks: action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        projectTasks: [action.payload, ...state.projectTasks],
      };
    case DELETE_TASK:
      return {
        ...state,
        projectTasks: state.projectTasks.filter(task => task._id !== action.payload),
      };
    case UPDATE_TASK:
      return {
        ...state,
        projectTasks: state.projectTasks.map(task =>
          task._id === action.payload._id ? action.payload : task
        ),
      };
    case ACTUAL_TASK:
      return {
        ...state,
        taskSelected: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
