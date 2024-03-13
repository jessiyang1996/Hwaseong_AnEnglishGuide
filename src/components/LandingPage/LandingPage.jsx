import React, { useState } from 'react';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  return (
    <div className="landingPageContainer">
      <div className="container">
        {/* <img className="headerImage" src="/images/IMG_0055.jpg"></img> */}
        <img className="headerImage" src="/images/tando-jeongok.jpeg"></img>
      </div>
      <div></div>
    </div>
  );
}

export default LandingPage;
