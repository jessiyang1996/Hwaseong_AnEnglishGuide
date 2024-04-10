import './Nav.css';
import React, { useState } from 'react';
//useRef is used if we don't need to render a value
//useEffect = initial load of component
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Nav() {
  const user = useSelector((store) => store.user);

  //the drop down menu should not appear until clicked on
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="navContainer">
      <img src="/images/logo.png" className="navigationLogo" alt="Logo"></img>
      <div className="navLinkContainer">
        {/* If no user is logged in, show these links: */}
        {!user.id && (
          <>
            <Link to="/home" className="navLink">
              HOME
            </Link>

            <Link to="/about" className="navLink">
              ABOUT
            </Link>

            {/* <Link to="/explore-hwaseong" className="navLink">
              EXPLORE HWASEONG
            </Link> */}

            <Link to="/nearby-recommendations" className="navLink">
              NEARBY RECOMMENDATIONS
            </Link>
          </>
        )}
        {/* If a user is logged in, show these links: */}
        {user.id && (
          <>
            <Link to="/home" className="navLink">
              HOME
            </Link>

            <Link to="/about" className="navLink">
              ABOUT
            </Link>

            {/* <Link to="/explore-hwaseong" className="navLink">
              EXPLORE HWASEONG
            </Link> */}

            <Link to="/nearby-recommendations" className="navLink">
              NEARBY RECOMMENDATIONS
            </Link>

            <AccountCircleIcon className="navLink" onClick={toggleDropdown} />
          </>
        )}
        {/* DROPDOWN MENU */}
        <div>
          {showDropdown && (
            <div className="dropdownDiv">
              <Link to="/admin-dashboard" className="dropdownItem">
                Dashboard
              </Link>
              <LogOutButton id="logOutButton" className="dropdownItem" />
            </div>
          )}
        </div>
      </div>
      {/* End of DROPDOWN MENU */}
      {/* End of navLinkContainer */}
    </div>
  );
}

export default Nav;
