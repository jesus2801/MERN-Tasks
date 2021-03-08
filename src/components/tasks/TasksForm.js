import React, {useContext} from 'react';

import projectsContext from '../../context/projects/Projectcontext';

const TasksForm = () => {
  const {project} = useContext(projectsContext);

  if (!project) return null;

  const [actualProject] = project;

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
