import React, { useState } from 'react';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  return (
    <div className="landingPageContainer">
      <div className="headerImageContainer">
        {/* <img className="headerImage" src="/images/IMG_0055.jpg"></img> */}
        {/* <img className="headerImage" src="/images/tando-jeongok.jpeg"></img> */}
        <img className="headerImage" src="/images/IMG_9443.jpg"></img>
      </div>
      <div className="descriptionDetailDiv">
        <p className="descriptionDetail">
          Explore Hwaseong City. Experience life on the ports of Korea. Enjoy
          the flavors of the sea. Learn about the history of Hwaseong. Watch the
          sunset. Explore a new town. Catch crabs on the mudflats. Ride a cable
          car over the sea. There's many things to see and do in Hwaseong.
        </p>
      </div>
      <div className="galleryContainer">
        <h3 className="snapshotContainer">Snapshots of Hwaseong</h3>
        <div className="imagesGalleryDiv">
          <div className="imagesGallery">
            <img className="imgItem" src="/images/IMG_0903.jpg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
