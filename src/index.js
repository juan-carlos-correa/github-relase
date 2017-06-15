import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  HashRouter,
  Switch
} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';
import './index.css';

import BaseContainer from './containers/BaseContainer';
import About from './components/About/';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={BaseContainer}>
        <Route exact path=":user/:repo" />
        <Route exact path="/about" component={About} />
      </Route>
    </Switch>
  </HashRouter>,
  document.getElementById('root'));

registerServiceWorker();
