import React from 'react';
import NewProject from '../projects/NewProject';
import ProjectsList from '../projects/ProjectsList';

const SideBar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
      </h1>
      <NewProject />

      <h2>
        MERN<span>Projects</span>
      </h2>

      <ProjectsList />
    </aside>
  );
};

export default SideBar;
