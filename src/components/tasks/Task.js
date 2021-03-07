import React from 'react';

const Task = ({task}) => {
  return (
    <li>
      <p>{task.name}</p>
      <div className="buttons">
        {task.state ? (
          <button className="completed btn-task">completed</button>
        ) : (
          <button className="incomplete btn-task">incomplete</button>
        )}
        <button className="btn-task">Edit</button>
        <button className="btn-task">Delete</button>
      </div>
    </li>
  );
};

export default Task;
