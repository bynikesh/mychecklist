import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Navigation from './components/navigation';
import registerServiceWorker from './registerServiceWorker';
import AddList from './components/addlist';
// import Home from './components/searchbox';
import Register from './pages/auth/signup';
import Login from './pages/auth/login';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <div>
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={App} />
        <Route exact path="/add-list" component={AddList} />
        <Route exact path="/add-list" component={AddList} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  </div>,

  document.getElementById('root'),
);
registerServiceWorker();
