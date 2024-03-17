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
                    Home
                  </a>
                </li>
                <li>
                  <a href="http://localhost:5173/#/about" className="navLink">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="http://localhost:5173/#/explore-hwaseong"
                    className="navLink"
                  >
                    Explore Hwaseong
                  </a>
                </li>
                <li>
                  <a
                    href="http://localhost:5173/#/nearby-recommendations"
                    className="navLink"
                  >
                    Nearby Recommendations
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* end of navigation bar */}
        <div className="descriptionDiv">
          <h3 className="sectionTitle">Explore Hwaseong City. </h3>
          <p className="descriptionDivDescription">
            Experience life on the ports of Korea. Enjoy the flavors of the sea.
            Learn about the history of Hwaseong. Watch the sunset. Explore a new
            town. Catch crabs on the mudflats. Ride a cable car over the sea.
            There's many things to see and do in Hwaseong.
          </p>
        </div>
      </div>

      <div className="hwaseongImageThemesDiv">
        <img src="" className="hwaseongImageThemesItem"></img>
      </div>
    </div>
  );
}

export default LandingPageOfficial;
