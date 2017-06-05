import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Header from './components/Header/';
import ExternalLink from './components/ExternalLink/';

ReactDOM.render(
  <div>
    <Header title="Github Releases"/>
    <ExternalLink to="https://www.google.com.mx/" children="Google"/>
  </div>,
  document.getElementById('root'));
registerServiceWorker();
