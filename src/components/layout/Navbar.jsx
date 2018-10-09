/* This navigation component will navigate the users to the home page, addlist page and about page */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
// mport { clearCurrentProfile } from '../../actions/profileActions';
import logo from '../../logo.png';

class Navbar extends Component {
  onlogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

	state = {};

	render() {
	  const { isAuthenticated, user } = this.props.auth;
	  // const { profile, landing } = this.props.profile;

	  const authLinks = (
  <ul className="navbar-nav ml-auto">
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {user.name}
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link className="dropdown-item" to="/profile">
							Profile

        </Link>

        <a className="dropdown-item" href="#">
							Account Setting

        </a>
        <div className="dropdown-divider" />
        <a onClick={this.onlogoutClick.bind(this)} className="dropdown-item">
							Logout

        </a>
      </div>
    </li>
  </ul>
	  );
	  const guestLinks = (
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <Link className="nav-link" to="/register">
						Sign Up

      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" to="/login">
						Login

      </Link>
    </li>
  </ul>
	  );

	  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">
      <img src={logo} width="30" height="30" alt="" />
      <span className="navbar-brand mb-0 h1">MyChecklist</span>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href={isAuthenticated ? '/dashboard' : '/'}>
								Home
            {' '}
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/add-list">
								Addlist

          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/feed">
								List fedd

          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
								About

          </a>
        </li>
      </ul>
      {isAuthenticated ? authLinks : guestLinks}
    </div>
  </nav>
	  );
	}
}

Navbar.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  // profile: PropTypes.object.isRequired,

  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  profile: state.profile,

  auth: state.auth,
  // errors: state.errors,
});
export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile },
)(Navbar);
