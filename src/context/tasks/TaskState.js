import React, {useReducer} from 'react';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';

const TaskState = props => {
  const initialState = {
    tasks: [],
  };

  // dispatch and state
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
