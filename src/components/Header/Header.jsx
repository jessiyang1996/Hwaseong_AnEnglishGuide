import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div className="headerDiv">
        <Link className="headerTitleLink" to="/home">
          <h1 className="headerTitle">Hwaseong: An English Guide</h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;
