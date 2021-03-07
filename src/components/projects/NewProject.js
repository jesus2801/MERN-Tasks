import React, {Fragment, useContext, useState} from 'react';
import projectContext from '../../context/projects/Projectcontext';

const NewProject = () => {
  //get form state
  const {projectForm, showForm, addProject, showError} = useContext(projectContext);

  //state for project
  const [project, setProject] = useState({
    name: '',
  });

  const onChange = e => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  //when user submit form
  const onSubmit = e => {
    e.preventDefault();

    //validate name
    if (name.trim() === '') {
      showError("You can't add a project without a name");
      return;
    }

    //add to state
    addProject(project);

    //reset form
    setProject({
      name: '',
    });
  };

  const onClick = () => showForm();

  //deconstruct project name
  const {name} = project;

  return (
    <Fragment>
      <button type="button" className="button-1 new-project" onClick={onClick}>
        New Project
      </button>

      {projectForm ? (
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Project name"
              className="project-name"
              name="name"
              value={name}
              onChange={onChange}
              onFocus={e => {
                e.target.parentNode.parentNode
                  .querySelector('.lines')
                  .classList.add('active');
              }}
              onBlur={e => {
                e.target.parentNode.parentNode
                  .querySelector('.lines')
                  .classList.remove('active');
              }}
            />
            <div className="lines">
              <div></div>
              <div></div>
            </div>
          </div>

          <button className="button-1 add-project">Add Project</button>
        </form>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
