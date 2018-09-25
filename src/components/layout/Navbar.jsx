/* This navigation component will navigate the users to the home page, addlist page and about page */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {
  onlogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

	state = {};

	render() {
	  const { isAuthenticated, user } = this.props.auth;

	  const authLinks = (
  <ul className="navbar-nav ml-auto">
    <li className="nav-item navbar-right">
      <a href="" onClick={this.onlogoutClick.bind(this)} className="nav-link">
						Logout

      </a>
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
					Mychecklist

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
          <a className="nav-link" href="/">
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
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  // errors: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
  // errors: state.errors,
});
export default connect(
  mapStateToProps,
  { logoutUser },
)(Navbar);
