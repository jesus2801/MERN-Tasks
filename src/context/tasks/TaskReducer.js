import {PROJECT_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK, ACTUAL_TASK} from '../../types';

const reducer = (state, action) => {
  switch (action.type) {
    case PROJECT_TASKS:
      return {
        ...state,
        projectTasks: state.tasks.filter(task => task.projectID === action.payload),
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.projectTasks.map(task =>
          task.id === action.payload.id ? action.payload : task
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
