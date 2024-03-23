import './Nav.css';
import React, { useState } from 'react';
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

            <Link to="/explore-hwaseong" className="navLink">
              EXPLORE HWASEONG
            </Link>

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

            <Link to="/explore-hwaseong" className="navLink">
              EXPLORE HWASEONG
            </Link>

            <Link to="/nearby-recommendations" className="navLink">
              NEARBY RECOMMENDATIONS
            </Link>

            <AccountCircleIcon className="navLink" onClick={toggleDropdown} />
          </>
        )}
      </div>
      {/* End of navLinkContainer */}

      {/* DROPDOWN MENU */}
      <div className="dropdownDiv">
        {showDropdown && (
          <div className="dropDownItemsDiv">
            <Link to="/admin-dashboard" className="dropdownItem">
              Dashboard
            </Link>
            <LogOutButton id="logOutButton" className="dropdownItem" />
          </div>
        )}
      </div>
      {/* End of DROPDOWN MENU */}
    </div>
  );
}

export default Nav;
