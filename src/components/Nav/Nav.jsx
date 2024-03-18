import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="navContainer">
      <img src="/images/logo.png" className="navigationLogo"></img>
      <div className="navLinkContainer">
        <nav>
          <ul>
            <li>
              <Link to="/" className="navLink">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className="navLink">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/explore-hwaseong" className="navLink">
                EXPLORE HWASEONG
              </Link>
            </li>
            <li>
              <Link to="/nearby-recommendations" className="navLink">
                NEARBY RECOMMENDATIONS
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
