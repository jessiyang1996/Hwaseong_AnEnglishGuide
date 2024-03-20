import './RegisterPage.css';

import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterPage() {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <div className="registerPageEntireDiv">
      {/* error message */}
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      {/* end of error message */}
      <div className="registerPageContainer">
        {/* Register Form */}
        <form className="registerPageFormPanel" onSubmit={registerUser}>
          <h2>Register User</h2>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={username}
                required
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </div>
          <div>
            <input
              className="btn"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        {/* End of register form */}
        {/* Login Button */}
        <center>
          <button
            type="button"
            className="loginButton"
            onClick={() => {
              history.push('/admin');
            }}
          >
            Login
          </button>
        </center>
        {/* End of Login Button */}
      </div>
    </div>
  );
}

export default RegisterPage;
