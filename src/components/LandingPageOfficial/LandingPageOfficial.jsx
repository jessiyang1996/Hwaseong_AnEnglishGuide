import './LandingPageOfficial.css';

function LandingPageOfficial() {
  return (
    <div>
      <div className="banner">
        {/* Header Image */}
        <div className="mainHeaderImage"></div>
        {/* end of image banner div */}
        {/* Navigation Bar */}
        <div className="navigationBarContainer">
          <img src="/images/logo.png" className="navigationLogo"></img>
          <div className="navLinkContainer">
            <nav>
              <ul>
                <li>
                  <a href="http://localhost:5173/#/" className="navLink">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="http://localhost:5173/#/about" className="navLink">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    href="http://localhost:5173/#/explore-hwaseong"
                    className="navLink"
                  >
                    EXPLORE HWASEONG
                  </a>
                </li>
                <li>
                  <a
                    href="http://localhost:5173/#/nearby-recommendations"
                    className="navLink"
                  >
                    NEARBY RECOMMENDATIONS
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* end of navigation bar */}
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
