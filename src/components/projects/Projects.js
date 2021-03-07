import React from 'react';

import SideBar from '../layout/SideBar';
import Header from '../layout/Header';
import TasksForm from '../tasks/TasksForm';
import TasksList from '../tasks/TasksList';

import '../../styles/dist/projects.min.css';

function Projects() {
  return (
    <div className="main-ctn">
      <SideBar />
      <div className="main">
        <Header />
        <TasksForm />
        <TasksList />
        <main></main>
      </div>
    </div>
  );
}

export default Projects;
