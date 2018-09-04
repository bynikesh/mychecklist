/* This navigation component will navigate the users to the home page, addlist page and about page */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
	state = {};

	render() {
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
    </div>
  </nav>
	  );
	}
}

export default Navigation;
