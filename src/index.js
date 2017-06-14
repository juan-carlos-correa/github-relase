import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  HashRouter
} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';
import './index.css';

import SearchContainer from './containers/SearchContainer';

ReactDOM.render(
  <HashRouter >
    <Route path="/" component={SearchContainer}/>
  </HashRouter>,
  document.getElementById('root'));

registerServiceWorker();
