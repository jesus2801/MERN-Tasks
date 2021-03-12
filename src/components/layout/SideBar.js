import React from 'react';
import NewProject from '../projects/NewProject';
import ProjectsList from '../projects/ProjectsList';

const SideBar = ({menuState}) => {
  return (
    <aside className={menuState ? '' : 'ocult'}>
      <div className="main-side-bar">
        <h1>
          MERN<span>Tasks</span>
        </h1>
        <NewProject />

        <h2>
          MERN<span>Projects</span>
        </h2>

        <ProjectsList />
      </div>
      <p className="message-dev">Developed by Jesús David García Vargas</p>
    </aside>
  );
};

export default SideBar;
