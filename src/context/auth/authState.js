import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import {SUCCESS_REGISTER, SUCCESS_LOGIN, GET_USER, SIGN_OFF} from '../../types';
import axiosClient from '../../config/axios';
import helpers from '../../functions';

const AuthState = props => {
  const initState = {
    token: localStorage.getItem('token'),
    authenticate: false,
    user: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(AuthReducer, initState);

  //functions
  const registerUser = async data => {
    try {
      helpers.toggleLoader(true);
      const response = await axiosClient.post('/users', data);
      helpers.toggleLoader(false);

      dispatch({
        type: SUCCESS_REGISTER,
        payload: response.data,
      });

      //get user
      returnUser();
    } catch (e) {
      localStorage.removeItem('token');
      if (e.response.data.errors) {
        helpers.showError(e.response.data.errors[0].msg);
        return;
      }
      helpers.showError(e.response.data.msg);
    }
  };

  const returnUser = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      helpers.tokenAuth(token);
    }

    try {
      const response = await axiosClient.get('/users');
      dispatch({
        type: GET_USER,
        payload: response.data.user,
      });
    } catch (e) {
      localStorage.removeItem('token');
      helpers.showError(e.response.data.msg);
    }
  };

  const loginUser = async data => {
    try {
      helpers.toggleLoader(true);
      const response = await axiosClient.post('/auth', data);
      helpers.toggleLoader(false);

      dispatch({
        type: SUCCESS_LOGIN,
        payload: response.data,
      });

      //get user
      returnUser();
    } catch (e) {
      localStorage.removeItem('token');
      if (e.response.data.errors) {
        helpers.showError(e.response.data.errors[0].msg);
        return;
      }
      helpers.showError(e.response.data.msg);
    }
  };

  const signOff = () => {
    dispatch({
      type: SIGN_OFF,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticate: state.authenticate,
        user: state.user,
        msg: state.msg,
        loading: state.loading,
        registerUser,
        loginUser,
        returnUser,
        signOff,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
