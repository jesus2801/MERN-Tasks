import React from 'react';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';
import NotFound from './components/NotFound';

import ProjectState from './context/projects/projectState';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <ProjectState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/newAccount" component={NewAccount} />
          <Route exact path="/projects" component={Projects} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ProjectState>
  );
}

export default App;
