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
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import LandingPageOfficial from '../LandingPageOfficial/LandingPageOfficial';
import ExploreHwaseong from '../ExploreHwaseong/ExploreHwaseong';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
// import SwitchNavBar from '../SwitchNavBar/SwitchNavBar';

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
        <div>
          {/* <SwitchNavBar> */}
          <Nav />
          {/* </SwitchNavBar> */}

          {/* Visiting localhost:5173 will redirect to localhost:5173/home */}
          <Redirect exact from="/" to="/home" />

          <Route exact path="/home">
            <LandingPageOfficial />
            {/* <LandingPage /> */}
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route path="/admin" exact>
            <LoginPage />
          </Route>
          <Route path="/registration" exact>
            <RegisterPage />
          </Route>
          <Route path="/explore-hwaseong">
            <ExploreHwaseong />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:5173/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:5173/user */}
          <ProtectedRoute exact path="/admin-dashboard">
            <AdminDashboard />
          </ProtectedRoute>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
