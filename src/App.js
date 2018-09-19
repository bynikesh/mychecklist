import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';
import setAuthToken from './util/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import store from './store';
import Navbar from './components/layout/Navbar';
import AddList from './components/addlist';
import Footer from './components/layout/Footer';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Searchbox from './components/searchbox';
import 'bootstrap/dist/css/bootstrap.css';

// check for token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwtDecode(localStorage.jwtToken);

  store.dispatch(setCurrentUser(decoded));
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
          <Route exact path="/add-list" component={AddList} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default App;
