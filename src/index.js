import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  HashRouter,
  Switch
} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';
import './index.css';

import SearchContainer from './containers/SearchContainer';
import AboutContainer from './containers/AboutContainer/';

ReactDOM.render(
  <HashRouter>
    <Switch>
        <Route exact path="/" component={SearchContainer}/>
        <Route exact path=":user/:repo" />
        <Route exact path="/about" component={AboutContainer} />
    </Switch>
  </HashRouter>,
  document.getElementById('root'));

registerServiceWorker();
