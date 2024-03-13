import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div className="headerDiv">
        <Link className="headerTitleLink" to="/home">
          <h1 className="headerTitle">Hwaseong: An English Guide</h1>
        </Link>

        {/* Links for the navigation (menu bar) */}
        <div className="navDiv">
          <Link className="navLink" to="/home">
            Home
          </Link>
          <Link className="navLink" to="/about">
            About
          </Link>
          <Link className="navLink" to="/about">
            Places to Visit
          </Link>
          <Link className="navLink" to="/about">
            Recommendations
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
