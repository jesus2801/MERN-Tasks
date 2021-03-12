import React, {useContext, useEffect, useState} from 'react';

import SideBar from '../layout/SideBar';
import Header from '../layout/Header';
import TasksForm from '../tasks/TasksForm';
import TasksList from '../tasks/TasksList';

import authContext from '../../context/auth/authContext';

import '../../styles/dist/projects.min.css';
import menu from '../../images/icons/menu.png';

function Projects() {
  const {returnUser} = useContext(authContext);
  const [menuState, setMenuState] = useState(window.screen.width > 1100 ? true : false);

  useEffect(() => {
    returnUser();
    // eslint-disable-next-line
  }, []);

  const handleMenu = () => {
    setMenuState(!menuState);
  };

  window.onresize = () => {
    if (window.screen.width > 1100) {
      setMenuState(true);
    }
  };

  return (
    <div className="main-ctn">
      <img src={menu} alt="bars" className="menu" onClick={handleMenu} />
      <SideBar menuState={menuState} />
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
