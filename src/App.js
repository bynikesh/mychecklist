import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/navigation';
// import Header from './components/header';
import Footer from './components/footer';
// import SearchBox from './components/searchbox';

/**
 *
 * Main app component of my checklist app
 * @class App
 * @extends {Component}
 */
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
