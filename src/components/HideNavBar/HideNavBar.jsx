import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const HideNavBar = ({ children }) => {
  //define variables:
  const location = useLocation(); //useLocation will allow us to keep track of the route
  let [showClientNav, setShowClientNav] = useState(true);

  // on first load...
  useEffect(() => {
    console.log('path location: ', location);

    if (location.pathname === '/admin-dashboard') {
      setShowClientNav(false);
    } else {
      setShowClientNav(true);
    }
  }, [location]);
  // every time the location changes, the page will reload.
  // end of useEffect

  return <div>{showClientNav && children}</div>;
};

export default HideNavBar;
