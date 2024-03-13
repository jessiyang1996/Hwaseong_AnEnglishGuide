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
      <div className="descriptionDetailDiv">
        <p className="descriptionDetail">
          Explore Hwaseong City. Experience life on the western port of South
          Korea. Enjoy the flavors of the sea. Learn about the history of
          Hwaseong. Watch the sunset. Explore a new town. Catch crabs on the
          mudflats. Ride a cable car over the sea. There's many things to see
          and do in Hwaseong.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
