import React from 'react';

import './AboutPage.css';

function AboutPage() {
  return (
    <div className="container">
      <div className="contentDiv">
        <h3 className="aboutHeader">Location</h3>
        <div className="contentContainer">
          <div className="smallerContainer">
            <p>
              Hwaseong is a city located on the west coast of Gyeonggi-do South
              Korea. It has the largest land area in the Gyeonggi-do province
              (the land surrounding Seoul) and most of the land is used for
              farming. Some major crops in this area include rice and Songsan
              Grapes.
            </p>
          </div>
        </div>
      </div>
      {/* resources: */}
      <div className="resourcesDiv"></div>
    </div>
  );
}

export default AboutPage;
