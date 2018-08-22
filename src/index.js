import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AddList from './components/addlist';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(

 
    <Router>
        <div>
          <Route exact path='/' component={App} />
          <Route exact path='/add-list' component={AddList} />
        </div>
    </Router>,
  
    document.getElementById('root')
  );
  registerServiceWorker();