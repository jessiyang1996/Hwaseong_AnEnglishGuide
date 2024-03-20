import './LoginPage.css';
// import LoginForm from '../LoginForm/LoginForm';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';

function LoginPage() {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <div className="loginPageEntireDiv">
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div className="loginPageContainer">
        {/* Login Form */}
        <div className="loginFormEntirePage">
          <form className="formPanel" onSubmit={login}>
            <h2 className="loginFormTitle">Login</h2>
            <div>
              <label htmlFor="username">
                <input
                  type="text"
                  name="username"
                  required
                  value={username}
                  placeholder="Username"
                  className="loginFormInputFields"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                <input
                  type="password"
                  name="password"
                  required
                  value={password}
                  placeholder="Password"
                  className="loginFormInputFields"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>
            </div>
            <div>
              <input
                className="loginBtn"
                type="submit"
                name="submit"
                value="Log In"
              />
            </div>
          </form>
        </div>
        {/* End of Login Form */}
        {/* Register Button */}
        <center>
          <button
            type="button"
            className="registerButton"
            onClick={() => {
              history.push('/registration');
            }}
          >
            Register
          </button>
        </center>

        {/* end of Register Button */}
      </div>
    </div>
  );
}

export default LoginPage;
