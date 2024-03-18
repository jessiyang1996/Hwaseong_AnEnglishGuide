import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Nav from '../Nav/Nav';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import LandingPageOfficial from '../LandingPageOfficial/LandingPageOfficial';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Nav />
        <div>
          <Route path="/" exact>
            <LandingPageOfficial />
            {/* <LandingPage /> */}
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/admin" exact>
            <LoginPage />
          </Route>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
