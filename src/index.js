/**
 *  Copyright (c) 2018
 *
 * main starting poin for the frontend
 *
 * @summary main starting point of the app
 * @author Nikesh Adhikari
 *
 * Created at     : 2018-09-09 19:29:51
 * Last modified  : 2018-09-10 14:57:09
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
