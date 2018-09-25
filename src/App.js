import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';
import setAuthToken from './util/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';

import PrivateRoute from './components/common/PrivateRoute';

import Navbar from './components/layout/Navbar';
import AddList from './components/addlist';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';
import Footer from './components/layout/Footer';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Searchbox from './components/searchbox';
import { clearCurrentProfile } from './actions/profileActions';

// check for token
if (localStorage.jwtToken) {
  // set header auth token
  setAuthToken(localStorage.jwtToken);
  // Get user info by decoding the token
  const decoded = jwtDecode(localStorage.jwtToken);
  // set isAuthenticated and user
  store.dispatch(setCurrentUser(decoded));
  // check if token is expired
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    // TODO: clear current Profile
    store.dispatch(clearCurrentProfile());
    // redirect to login page
    window.location.href = '/login';
  }
}
/**
 *
 * Main app component of my checklist app
 * @class App
 * @extends {Component}
 */

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route exact path="/" component={Searchbox} />
          <Route exact path="/add-list" component={AddList} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/create-profile" component={CreateProfile} />
          </Switch>
        </div>
        <div />
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default App;
