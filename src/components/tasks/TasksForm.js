import React from 'react';

const TasksForm = () => {
  return (
    <div className="form-ctn">
      <form>
        <input
          type="text"
          placeholder="Enter your task"
          onFocus={e => {
            e.target.parentNode.querySelector('.lines').classList.add('active');
          }}
          onBlur={e => {
            e.target.parentNode.querySelector('.lines').classList.remove('active');
          }}
        />
        <div className="lines">
          <div></div>
          <div></div>
        </div>
        <input type="submit" value="Add task" className="button-1" />
      </form>
    </div>
  );
};

export default TasksForm;
