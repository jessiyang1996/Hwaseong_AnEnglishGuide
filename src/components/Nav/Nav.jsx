import './Nav.css';
import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="navContainer">
      <img src="/images/logo.png" className="navigationLogo"></img>
      <div className="navLinkContainer">
        <div className="linksDiv">
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

              <LogOutButton className="navLink" />
            </>
          )}
        </div>
        {/* End of linksDiv */}
      </div>
      {/* End of navLinkContainer */}
    </div>
  );
}

export default Nav;
