import './LoginPage.css';

import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';

function LoginPage() {
  const history = useHistory();

  return (
    <div className="loginPageEntireDiv">
      <div className="loginPageContainer">
        <LoginForm />
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
