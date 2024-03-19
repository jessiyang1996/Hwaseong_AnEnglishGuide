import './LoginPage.css';

import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  return (
    <div className="loginPageEntireDiv">
      <LoginForm />
      {/* Register Button */}
      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>

      {/* end of Register Button */}
    </div>
  );
}

export default LoginPage;
