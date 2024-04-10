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

        {/* <div>
          <img
            className="whiteImageMap"
            src="/images/ImageMapWhiteVersion.png"
          />
        </div> */}

        <div className="descriptionDiv">
          <div className="sectionHeaderDiv">
            <h2 className="landingPageTitleText">Explore Hwaseong City. </h2>
          </div>
          {/* div for the text in descriptionDiv */}
          <div className="sectionDescriptionDiv">
            <p>
              Enjoy the rich culture of South Korea in Hwaseong City. Spend the
              day at a rural fishing village exploring the ports and watching
              the sunset at the sea or explore the modern conveniences in a
              larger town. From looking at dinosaur eggs, exploring a fortress
              from the Baekje Dynasty, to venturing around a new and upcoming
              metropolitan. There's many things to see and do in Hwaseong City.
            </p>
          </div>
        </div>
        {/* div for the photos and descriptions */}
        <div className="landingPhotos">
          <img className="landingImage" src="/images/tando_jeongok.jpeg" />
          <img className="landingImage" src="/images/tando_jeongok.jpeg" />
          <img className="landingImage" src="/images/tando_jeongok.jpeg" />
        </div>
      </div>
    </div>
  );
}

export default LandingPageOfficial;
