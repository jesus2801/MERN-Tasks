import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import arrow from '../../images/icons/arrow-right.png';
import curve from '../../images/objects/curve.svg';
import phone from '../../images/objects/app-phone.svg';

import helpers from '../../functions';
import AuthContext from '../../context/auth/authContext';

import '../../styles/dist/login.min.css';

function NewAccount(props) {
  const {registerUser, authenticate} = useContext(AuthContext);

  useEffect(() => {
    if (authenticate) {
      props.history.push('/projects');
    }
    // eslint-disable-next-line
  }, [authenticate]);

  //state for login
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  //extract from user
  const {email, password, name, password2} = user;

  const onChange = e => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  //when user login
  const onSubmit = e => {
    e.preventDefault();

    //validate fields
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      password2.trim() === ''
    ) {
      helpers.showError('Please fill in all the fields correctly');
      return;
    }

    //both passwords the same
    if (password !== password2) {
      helpers.showError('Please both passwords have to be the same');
      return;
    }

    //minimum password of 6 characters
    if (password.length < 6) {
      helpers.showError('Please, the password must be at least 6 characters long.');
      return;
    }

    //go to action
    registerUser({
      name,
      mail: email,
      password,
    });
  };

  return (
    <div className="main">
      <div className="images">
        <object data={curve} type="image/svg+xml" className="curve">
          Your browser does not support objects
        </object>
        <object data={phone} type="image/svg+xml" className="phone">
          Your browser does not support objects
        </object>
      </div>
      <div className="login-form">
        <h2>Signup</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Name:</label>
            <div className="input-ctn">
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
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
                autoFocus
              />
              <span>*</span>
            </div>
            <div className="lines">
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <div className="input-ctn">
              <input
                type="text"
                placeholder="Enter your email"
                id="email"
                value={email}
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
              <span>*</span>
            </div>
            <div className="lines">
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div className="input-ctn">
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                value={password}
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
              <span>*</span>
            </div>
            <div className="lines">
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password2">Confirm Password:</label>
            <div className="input-ctn">
              <input
                type="password"
                placeholder="Enter your password"
                id="password2"
                value={password2}
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
              <span>*</span>
            </div>
            <div className="lines">
              <div></div>
              <div></div>
            </div>
          </div>

          <button type="submit">
            <p>Signup</p>
            <img src={arrow} alt="arrow right" />
          </button>

          <Link to="/">Have an account?</Link>
        </form>
      </div>
    </div>
  );
}

export default NewAccount;
