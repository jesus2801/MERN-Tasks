import React, {useContext, useEffect} from 'react';

import SideBar from '../layout/SideBar';
import Header from '../layout/Header';
import TasksForm from '../tasks/TasksForm';
import TasksList from '../tasks/TasksList';

import authContext from '../../context/auth/authContext';

import '../../styles/dist/projects.min.css';

function Projects() {
  const {returnUser} = useContext(authContext);

  useEffect(() => {
    returnUser();
  }, [])

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
