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
            <h3>Explore Hwaseong City. </h3>
          </div>

          <div className="sloganContainer">
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
