import React, {useContext, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import authContext from '../context/auth/authContext';

const PrivateRoute = ({component: Component, ...props}) => {
  const {authenticate, returnUser, loading} = useContext(authContext);

  useEffect(() => {
    returnUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Route
      {...props}
      render={props =>
        !authenticate && !loading ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
