import React from 'react';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';
import NotFound from './components/NotFound';

import ProjectState from './context/projects/ProjectState';
import TaskState from './context/tasks/TaskState';
import AuthState from './context/auth/authState';
import helpers from './functions';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';

//if user have a token
const token = localStorage.getItem('token');
if (token) {
  helpers.tokenAuth(token);
}

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AuthState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/newAccount" component={NewAccount} />
              <PrivateRoute exact path="/projects" component={Projects} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </AuthState>
      </TaskState>
    </ProjectState>
  );
}

export default App;
