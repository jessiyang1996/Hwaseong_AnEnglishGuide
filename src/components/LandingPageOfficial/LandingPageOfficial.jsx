import { Link } from 'react-router-dom';

import './LandingPageOfficial.css';
import Nav from '../Nav/Nav';

function LandingPageOfficial() {
  return (
    <div>
      <div className="banner">
        {/* Header Image */}
        <div>
          <img src="/images/IMG_9440.jpg" className="mainHeaderImage"></img>
        </div>
        {/* I need to include the Nav on the homepage because I have my Nav as absolute. Because of this, 
        it is trying to position itself to an empty div and is not appearing on home page */}
        <div className="navigationBarContainer">
          <Nav />
        </div>
        <div className="descriptionDiv">
          <div className="sectionHeaderDiv">
            <h2 className="landingPageTitleText">Explore Hwaseong City. </h2>
          </div>

          {/* <div className="sloganContainer">
            <div className="sloganItemDiv">
              <p>Experience life on the ports of Korea.</p>
              <img src=""></img>
            </div>
            <div className="sloganItemDiv">
              <img></img>
              <p>Enjoy the flavors of the sea.</p>
            </div>
            <p className="descriptionDivDescription">
              Learn about the history of Hwaseong. Watch the sunset. Explore a
              new town. Catch crabs on the mudflats. Ride a cable car over the
              sea. There's many things to see and do in Hwaseong.
            </p>
          </div> */}

          <div className="landingSection1">
            <div className="landingDescriptionText">
              <p>Take a hike along mountains and visit Dang Seong Fortress</p>
            </div>
            <img
              src="images/DangseongFortress.jpg"
              className="dangseongFortressImage"
            />
          </div>

          <div className="landingSection2">
            <img src="images/cablecar2.jpg" className="cableCarImage" />
            <div className="landingDescriptionText">
              <p>Ride a cable car to Jebu Island.</p>
            </div>
          </div>
          <div className="landingSection3">
            <div className="landingDescriptionText">
              <p>Enjoy the sunset by the ports.</p>
            </div>
            <img src="images/tando_jeongok.jpeg" className="sunsetImage" />
          </div>
        </div>
      </div>

      <div className="hwaseongImageThemesDiv">
        <img src="" className="hwaseongImageThemesItem"></img>
      </div>
    </div>
  );
}

export default LandingPageOfficial;
